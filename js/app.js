'use strict';

angular.module('surfspotter', [
	'ngResource',
	'ngStorage',
	'ui.router']).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('app', {
		url: '/'
	})
	.state('forecast', {
		url: '/forecast/:spotId',
		templateUrl: './modules/Surf/partials/Forecast.html',
		controller: 'ForecastController as Forecast',
		resolve: {
			forecast: function (SurfService, $stateParams) {
				return SurfService.getForecast($stateParams.spotId);
			}
		}
	})
	.state('signIn', {
		url: '/signIn',
		templateUrl: './modules/Authentication/partials/SignIn.html',
		controller: 'SignInController as SignIn'
	})
	.state('signUp', {
		url: '/signUp',
		templateUrl: './modules/Authentication/partials/SignUp.html',
		controller: 'SignUpController as SignUp'
	});
}]);

angular.module('surfspotter').controller('AuthController', [
	'AuthService',
	function (AuthService) {
		var Auth = this;

		Auth.isSignedin = function () {
			return AuthService.isAuthenticated();
		};

	}
]);

angular.module('surfspotter').controller('SignInController', [
	'$state',
	'AuthService',
	'UserService',
	'NotificationService',
	function ($state, AuthService, UserService, NotificationService) {
		var SignIn = this;

		SignIn.authenticate = function (username, password) {
			UserService.authenticate({username: username, password: password}).$promise.then(function (data) {
				return UserService.checkToken({token: data.token}).$promise;
			}).then(function (user) {
				AuthService.storeUser(user);
                NotificationService.addToNextState('You are now logged in, have a great time :)', 'success', 2000);
				$state.go('app');
			});
		};
	}
]);

angular.module('surfspotter').controller('SignUpController', [
	'$state',
	'UserService',
	function ($state, UserService) {
		var SignUp = this;

		SignUp.register = function (user) {
			SignUp.error = {};
			if (angular.isUndefined(user)) {
				SignUp.error.user = 'Please input information into the fields.';
			} else if (user.password !== user.confirmedPassword) {
				SignUp.error.password = 'Passwords Don\'t Match.';
			} else {
				var userData = angular.copy(user);
				delete userData.confirmedPassword;
				UserService.save(userData).$promise.then(function () {
					$state.go('signIn');
				});
			}
		};
	}
]);

angular.module('surfspotter').factory('TokenInterceptor', [
    '$q',
    '$injector',
    'AuthService',
    'NotificationService',
    function ($q, $injector, AuthService, NotificationService) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if (AuthService.isAuthenticated() && config.url.indexOf('/api/') === 0) {
                    config.url += (config.url.indexOf('?') > 0 ? '&' : '?') + 'token=' + AuthService.getToken();
                }

                return config;
            },

            requestError: function(rejection) {
                return $q.reject(rejection);
            },

            // response: function (response) {
            // },

            /* Revoke client authentication if 401 is received */
            responseError: function(rejection) {
                if (rejection != null && rejection.status === 401 && AuthService.isAuthenticated()) {
                    AuthService.clearToken();
                    //Redirect to signin
                    NotificationService.addToNextState('You are not logged in or your sesison has expired. Please login again.', 'danger', null);
                    $injector.get('$state').go('signIn');
                }

                return $q.reject(rejection);
            }
        };
    }
]);

angular.module('surfspotter').config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
}]);

angular.module('surfspotter').service('AuthService', [
	'$q',
	'$sessionStorage',
	function ($q, $sessionStorage) {

		function storeToken(token) {
			$sessionStorage.token = token;
		}

		function storeUser(newUser) {
			$sessionStorage.user = newUser;
			if (newUser.token) {
				storeToken(newUser.token);
			}
		}

		function getToken() {
			return $sessionStorage.token;
		}
		function getUser() {
			return $sessionStorage.user;
		}
		function clearToken() {
			delete $sessionStorage.token;
		}

		function clearUser() {
			clearToken();
			delete $sessionStorage.user;
		}

		function isAuthenticated() {
			// Maybe updte this to use the npm module to check validity?
			//Or Make a call to the server?
			return angular.isDefined($sessionStorage.token);
		}

		return {
			storeToken: storeToken,
			storeUser: storeUser,
			isAuthenticated: isAuthenticated,
			getToken: getToken,
			getUser: getUser,
			clearToken: clearToken,
			clearUser: clearUser
		};
	}
]);

angular.module('surfspotter').service('UserService', [
	'$resource',
	function ($resource) {
		return $resource('/api/user/:username', {},
			{
				authenticate: {
					method: 'POST',
					url: '/api/user/auth',
					isArray: false
				},
				checkToken: {
					method: 'GET',
					url: '/api/token/:token',
					isArray: false
				}
			});
	}
]);

angular.module('surfspotter').factory('RequestInteceptor', [
    '$q',
    function ($q) {
        return {
            request: function (conf) {
                if (conf.url.indexOf('/api/') === 0 && conf.method === 'GET') {
                    conf.url += (conf.url.indexOf('?') > 0 ? '&' : '?') + new Date().getTime();
                }
                return conf;
            },
            response: function (response) {
                return response || $q.when(response);
            },
            responseError: function(rejection) {
                return $q.reject(rejection);
            }
        };
    }
]);

angular.module('surfspotter').config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('RequestInteceptor');
}]);

angular.module('surfspotter').directive('navigationBar', [
	'$state',
	'AuthService',
	'NotificationService',
	function($state, AuthService, NotificationService) {
		return {
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function() {
				var NavigationBar = this;
				NavigationBar.isUserAuthenticated = AuthService.isAuthenticated;

				NavigationBar.signOut = function () {
					AuthService.clearToken();
					NotificationService.addToNextState('You are now signed out', 'success', 2000);
					$state.go('app', {}, {reload: true});
				};

				NavigationBar.getUser = AuthService.getUser;

			},
			controllerAs: 'NavigationBar',
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			// templateUrl: '',
			templateUrl: '/modules/Navigation/partials/NavigationBar.html',
			replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function() {}
		};
	}
]);

angular.module('surfspotter').directive('notification', [
	'$timeout',
	'NotificationService',
	function ($timeout, NotificationService) {
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: function() {
			var Notifications = this;

			Notifications.removeNotification = function (indexToRemove) {
				Notifications.list.splice(indexToRemove, 1);
			};
		},
		controllerAs: 'Notifications',
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: '/modules/Notifications/partials/Notification.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, Notifications) {
			Notifications.list = [];

			$scope.$on('$stateChangeSuccess', function () {
				var newNotifications = NotificationService.shiftAllNotifications();


				newNotifications.forEach(function(message){

					if(angular.isDefined(message.type)) {
						message[message.type] = true;
					} else {
						message.info = true;
					}
					Notifications.list.push(message);

					if(message.timeout !== null) {
						$timeout(function () {
							var index = Notifications.list.indexOf(message);
							Notifications.list.splice(index, 1);
						}, message.timeout ? message.timeout : 4000);
					}

				});
			});
		}
	};
}]);

angular.module('surfspotter').service('NotificationService', [
	'$localStorage',
	function ($localStorage) {
		if (angular.isUndefined($localStorage.notifications)) {
			$localStorage.notifications = [];
		}

		function addToNextState(message, type, timeout) {
			$localStorage.notifications.push({message: message, type: type, timeout: timeout});
		}

		// function getNotifications() {
		// 	return $localStorage.notifications;
		// }

		function shiftNotification() {
			return $localStorage.notifications.shift();
		}

		function shiftAllNotifications() {
			var notifications = $localStorage.notifications;
			$localStorage.notifications = [];
			return notifications;
		}

		return {
			addToNextState: addToNextState,
			// getNotifications: getNotifications,
			shiftNotification: shiftNotification,
			shiftAllNotifications: shiftAllNotifications
		};
	}
]);

angular.module('surfspotter').controller('ForecastController', [
	'$state',
	'SurfService',
	'forecast',
	function ($state, SurfService, forecast) {
		var Forecast = this;
		Forecast.place = forecast.place;
		Forecast.forecast = forecast.forecast;

		Forecast.setFavorite = function (isFavourite) {
			if (isFavourite) {
				SurfService.saveFavourite(Forecast.place.id).then(function () {
					$state.reload();
				});
			} else {
				SurfService.removeFavourite(Forecast.place.id).then(function () {
					$state.reload();
				});
			}
		};
	}
]);

angular.module('surfspotter').controller('LocationController', [
    '$timeout',
    '$rootScope',
    'SurfService',
    function ($timeout, $rootScope, SurfService) {
        // console.log(locations);
        var Locations = this;

        var currentQuery;
        Locations.findLocations = function (partial) {
            if (currentQuery) {
                    $timeout.cancel(currentQuery);
            }
            if(partial.length > 0) {
                currentQuery = $timeout(function () {
                    SurfService.findLocations(partial).then(function (data) {
                        Locations.locations = data;
                    });
                }, 300);
            } else {
                Locations.locations = [];
            }

        };

        $rootScope.$on('$stateChangeSuccess', function() {
            delete Locations.locationQuery;
            delete Locations.locations;
        });
    }
]);

angular.module('surfspotter').directive('locationSearch', [ function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: 'LocationController',
		controllerAs: 'Location',
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: './modules/Surf/partials/Locations.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function() {
		}
	};
}]);

// angular.module('surfspotter').directive('StarRating', [function () {
// 	return {
// 		restrict: 'A',
// 		// templateUrl:
// 		link: function (scope, element, attrs) {
// 		}
// 	};
// }]);

angular.module('surfspotter').service('SurfService', [
	'$http',
	'$q',
	'$resource',
	function ($http, $q, $resource) {
		var forecast = $resource('/api/msw/forecast/:spotId', {}),
			location = $resource('/api/msw/locations', {}, {
				find: {
					method: 'GET',
					url: '/api/msw/locations/find/:partial',
					isArray: true
				},
				getFavourite: {
					method: 'GET',
					url: '/api/msw/locations/favourite/',
					isArray: true
				},
				setFavourite: {
					method: 'POST',
					url: '/api/msw/locations/favourite/'
				},
				removeFavourite: {
					method: 'DELETE',
					url: '/api/msw/locations/favourite/'
				}
			});

		function getForecast(spotId) {
			return forecast.get({spotId: spotId}).$promise;
		}

		function findLocations(partial) {
			return location.find({partial: partial}).$promise;
		}

		function saveFavourite(locationId) {
			return location.setFavourite({locationId: locationId}).$promise;
		}
		function getFavourites() {
			return location.getFavourites().$promise;
		}
		function removeFavourite(locationId) {
			return location.removeFavourite({locationId: locationId}).$promise;
		}
		return {
			getForecast: getForecast,
			findLocations: findLocations,
			getFavourites: getFavourites,
			saveFavourite: saveFavourite,
			removeFavourite: removeFavourite

		};
	}
]);
