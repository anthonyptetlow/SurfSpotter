angular.module('surfspotter').controller('SignInController', [
	'$state',
	'AuthService',
	'UserService',
	'NotificationService',
	function ($state, AuthService, UserService, NotificationService) {
		var SignIn = this;
		SignIn.error = {};
		SignIn.authenticate = function (username, password) {
			UserService.authenticate({username: username, password: password}).$promise.then(function (data) {
				return UserService.checkToken({token: data.token}).$promise;
			}).then(function (user) {
				AuthService.storeUser(user);
				NotificationService.addToNextState('You are now logged in, have a great time :)', 'success', 2000);
				$state.go('app');
			}, function (error) {
				SignIn.error = {};

				if (error.data) {
					switch(error.data.error){
						case 'INCORRECT_PASSWORD':
						case 'BAD_PASSWORD':
							SignIn.error.password = 'Incorrect password';
							break;
						case 'USER_NOT_FOUND':
							SignIn.error.username = 'Please input valid a username';
							break;
						case 'AUTH_FAIL':
							break;
						case 'NO_USERNAME':
							SignIn.error.username = 'Please input a username';
							break;
						case 'NO_PASSWORD':
							SignIn.error.password = 'Please input a password';
							break;
						default:
							// NotificationService.addToNextState('Unable to login at this time', 'danger', 4000);
							SignIn.error.username = 'Unable to login at this time';
							break;
					}
				} else {
					// NotificationService.addToNextState('Unable to login at this time', 'danger', 4000);
					SignIn.error.username = 'Unable to login at this time';
				}
			});
		};
	}
]);
