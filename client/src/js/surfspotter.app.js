'use strict';

angular.module('surfspotter', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('app', {
		url: '/',
		templateUrl: './js/surf/partials/Surf.html',
		controller: 'SurfController as Surf'
	})
	.state('forcast', {
		url: '/forcast/:spotId',
		templateUrl: './js/surf/partials/Forcast.html',
		controller: 'ForcastController as Forcast',
		resolve: {
			forcast: function (SurfService, $stateParams) {
				return SurfService.getForcast($stateParams.spotId);
			}
		}
	})
	.state('signIn', {
		url: '/signIn',
		templateUrl: './js/signin/partials/SignIn.html',
		controller: 'SignInController as SignIn'
	})
	.state('signUp', {
		url: '/signUp',
		templateUrl: './js/signup/partials/SignUp.html',
		controller: 'SignUpController as SignUp'
	});
});
