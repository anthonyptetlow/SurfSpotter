'use strict';

angular.module('surfspotter', [
	'ngResource',
	'ngStorage',
	'ngAnimate',
	'ui.router']).config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	// .state('app', {
	// 	url: '/',
	// 	templateUrl: './Home.html'
	// })
	.state('location', {
		url: '/',
		templateUrl: './modules/Surf/partials/Locations.html',
		controller: 'LocationController as Location'
		// resolve: {
		// 	locations: function (SurfService) {
		// 		return SurfService.getLocations();
		// 	}
		// }
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
});
