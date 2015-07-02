angular.module('surfspotter').controller('SignInController', [
	'$state',
	'AuthService',
	'UserService',
	'NotificationService',
	function ($state, AuthService, UserService, NotificationService) {
		var SignIn = this;

		SignIn.authenticate = function (username, password) {
			UserService.authenticate({username: username, password: password}).$promise.then(function (data) {
				console.log('data', data);
				AuthService.storeToken(data.token);
                NotificationService.addToNextState('You are now logged in, have a great time :)', 'success', null);
				$state.go('location');
			}, function (error) {
				console.log('error', error);
			});
		};
	}
]);
