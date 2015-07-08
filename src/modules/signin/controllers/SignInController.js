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
				$state.go('location');
			});
		};
	}
]);
