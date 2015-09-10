'use strict';

angular.module('surfspotter', [
	'ngResource',
	'ngStorage',
	'ui.router',
	'angulartics',
	'angulartics.google.analytics'
	]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

	$urlRouterProvider.otherwise('/404/');

	$stateProvider
	.state('app', {
		url: '/',
		views: {
			'content': {
				templateUrl: 'Home.html'
			}
		}
	})
	.state('forecast', {
		url: '/forecast/:spotName/:spotId',
		views: {
			'content': {
				templateUrl: 'modules/Surf/partials/Forecast.html',
				controller: 'ForecastController as Forecast'
			}
		},
		resolve: {
			forecast: ['$stateParams', 'SurfService', function ($stateParams, SurfService) {
				return SurfService.getForecast($stateParams.spotId);
			}]
		}
	})
	.state('location', {
		url: '/location/:spotName/:spotId',
		views: {
			'content': {
				templateUrl: 'modules/Surf/partials/Location.html',
				controller: 'LocationController as Location'
			}
		},
		resolve: {
			location: ['$stateParams', 'SurfService', function ($stateParams, SurfService) {
				return SurfService.getLocation($stateParams.spotId);
			}]
		}
	})
	.state('signIn', {
		url: '/signIn',
		views: {
			'content': {
				templateUrl: 'modules/Authentication/partials/SignIn.html',
				controller: 'SignInController as SignIn'
			}
		}
	})
	.state('signUp', {
		url: '/signUp',
		views: {
			'content': {
				templateUrl: 'modules/Authentication/partials/SignUp.html',
				controller: 'SignUpController as SignUp'
			}
		}
	})
	.state('favourites', {
		url: '/favourites',
		views: {
			'content': {
				templateUrl: 'modules/Surf/partials/Favourites.html',
				controller: 'FavouritesController as Favourites'
			}
		},
		resolve: {
			favouritesList: ['SurfService', function (SurfService) {
				return SurfService.getFavourites();
			}]
		}
	}).state('404', {
		url: '/404/',
		views: {
			'content': {
				templateUrl: 'modules/Utils/partials/404.html'
			}
		}
	});

	// Enable html5 mode to remove the hashtag in urls
    $locationProvider.html5Mode(true);

}]);
