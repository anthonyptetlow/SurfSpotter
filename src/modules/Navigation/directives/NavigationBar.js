angular.module('surfspotter').directive('navigationBar', [
	'$state',
	'AuthService',
	'NotificationService',
	function($state, AuthService, NotificationService) {
		return {
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs) {
				var NavigationBar = this;
				NavigationBar.isUserAuthenticated = AuthService.isAuthenticated;

				NavigationBar.signOut = function () {
					AuthService.clearToken();
                    NotificationService.addToNextState('You are now signed out', 'success', null);
					$state.go('location', {}, {reload: true});
				};

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
			link: function($scope, iElm, iAttrs, controller) {

			}
		};
	}
]);
