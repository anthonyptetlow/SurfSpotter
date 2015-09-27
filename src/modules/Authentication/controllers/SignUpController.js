angular.module('surfspotter').controller('SignUpController', [
	'$state',
	'UserService',
	function ($state, UserService) {
		var SignUp = this;

		MetadataService.setTitle('Sign Up');
		MetadataService.setDescription('Sign up to Surf Spotter to save your favorite locations.');
		MetadataService.addKeyword('signup');

		SignUp.register = function (user) {
			SignUp.error = {};
			if (angular.isUndefined(user)) {
				SignUp.error.username = 'Please provide a username';
			} else if (user.password !== user.confirmedPassword) {
				SignUp.error.passwordCheck = 'Passwords Don\'t Match.';
			} else {
				var userData = angular.copy(user);
				delete userData.confirmedPassword;
				UserService.save(userData).$promise.then(function () {
					$state.go('signIn');
				}, function (error) {
					switch(error.data.error){
						case 'NO_USERNAME':
							SignUp.error.username = 'Please provide a username';
							break;
						case 'NO_EMAIL':
							SignUp.error.email = 'Please provide an email address';
							break;
						case 'NO_PASSWORD':
							SignUp.error.password = 'Please provide a password';
							break;
						case 'CREATE_FAILED':
						default:
							// NotificationService.addToNextState('Unable to create an account at this time', 'danger', 4000);
							SignUp.error.email = 'Unable to create an account at this time';
							break;
					}
				});
			}
		};
	}
]);
