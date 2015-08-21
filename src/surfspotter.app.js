'use strict';

angular.module('surfspotter', [
	'ngResource',
	'ngStorage',
	'ui.router',
	'angulartics',
	'angulartics.google.analytics'
	]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('app', {
		url: '/'
	})
	.state('forecast', {
		url: '/forecast/:spotName/:spotId',
		templateUrl: 'modules/Surf/partials/Forecast.html',
		controller: 'ForecastController as Forecast',
		resolve: {
			forecast: ['$stateParams', 'SurfService', function ($stateParams, SurfService) {
				return SurfService.getForecast($stateParams.spotId);
			}]
		}
	})
	.state('signIn', {
		url: '/signIn',
		templateUrl: 'modules/Authentication/partials/SignIn.html',
		controller: 'SignInController as SignIn'
	})
	.state('signUp', {
		url: '/signUp',
		templateUrl: 'modules/Authentication/partials/SignUp.html',
		controller: 'SignUpController as SignUp'
	})
	.state('favourites', {
		url: '/favourites',
		templateUrl: 'modules/Surf/partials/Favourites.html',
		controller: 'FavouritesController as Favourites',
		resolve: {
			favouritesList: ['SurfService', function (SurfService) {
				return SurfService.getFavourites();
			}]
		}
	});

	// Enable html5 mode to remove the hashtag in urls
    $locationProvider.html5Mode(true);

}]);
