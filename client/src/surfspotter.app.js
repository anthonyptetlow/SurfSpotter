'use strict';

angular.module('surfspotter', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	// .state('app', {
	// 	url: '/',
	// 	templateUrl: './Home.html'
	// })
	.state('location', {
		url: '/',
		templateUrl: './modules/surf/partials/Locations.html',
		controller: 'LocationController as Location',
		resolve: {
			locations: function (SurfService) {
				return SurfService.getLocations();
			}
		}
	})
	.state('forecast', {
		url: '/forecast/:spotId',
		templateUrl: './modules/surf/partials/Forecast.html',
		controller: 'ForecastController as Forecast',
		resolve: {
			forecast: function (SurfService, $stateParams) {
				return SurfService.getForecast($stateParams.spotId);
			}
		}
	})
	.state('signIn', {
		url: '/signIn',
		templateUrl: './modules/signin/partials/SignIn.html',
		controller: 'SignInController as SignIn'
	})
	.state('signUp', {
		url: '/signUp',
		templateUrl: './modules/signup/partials/SignUp.html',
		controller: 'SignUpController as SignUp'
	});
});
