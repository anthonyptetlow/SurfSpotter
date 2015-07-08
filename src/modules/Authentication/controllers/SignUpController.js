angular.module('surfspotter').controller('SignUpController', [
	'$state',
	'UserService',
	function ($state, UserService) {
		var SignUp = this;

		SignUp.register = function (user) {
			SignUp.error = {};
			if (angular.isUndefined(user)) {
				SignUp.error.user = 'Please input information into the fields.';
			} else if (user.password !== user.confirmedPassword) {
				SignUp.error.password = 'Passwords Don\'t Match.';
			} else {
				var userData = angular.copy(user);
				delete userData.confirmedPassword;
				UserService.save(userData).$promise.then(function () {
					$state.go('signIn');
				});
			}
		};
	}
]);
