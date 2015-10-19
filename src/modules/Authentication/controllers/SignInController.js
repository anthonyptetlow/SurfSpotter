angular.module('surfspotter').controller('SignInController', [
	'$state',
	'AuthService',
	'UserService',
	'NotificationService',
	'MetadataService',
	function ($state, AuthService, UserService, NotificationService, MetadataService) {

		MetadataService.setTitle('Sign In');
		MetadataService.setDescription('Sign in to Surf Spotter to save your favorite locations.');
		MetadataService.addKeyword('signin');
		MetadataService.addKeyword('login');

		var SignIn = this;
		SignIn.error = {};
		SignIn.authenticate = function (username, password) {
			UserService.authenticate({username: username, password: password}).$promise.then(function (data) {
				return UserService.checkToken({token: data.token}).$promise;
			}).then(function (user) {
				AuthService.storeUser(user);
				NotificationService.addToNextState('You are now logged in, have a great time :)', 'success', 2000);

				if (angular.isDefined(AuthService.getPreAuthState())) {
					$state.go(AuthService.getPreAuthState(), AuthService.getPreAuthParams());
				} else {
					$state.go('app');
				}
			}, function (error) {
				SignIn.error = {};

				if (error.data) {
					switch(error.data.error){
						case 'INCORRECT_PASSWORD':
						case 'BAD_PASSWORD':
						case 'NO_PASSWORD':
							SignIn.error.password = 'Please input a correct password';
							break;
						case 'USER_NOT_FOUND':
						case 'NO_USERNAME':
							SignIn.error.username = 'Please input a valid username';
							break;
						case 'AUTH_FAIL':
						default:
							NotificationService.addToNextState('We are having techincal problems and are to login at this time.', 'danger', 4000);
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
