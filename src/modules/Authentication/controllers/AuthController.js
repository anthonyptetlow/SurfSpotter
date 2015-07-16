angular.module('surfspotter').controller('AuthController', [
	'AuthService',
	function (AuthService) {
		var Auth = this;

		Auth.isSignedin = function () {
			return AuthService.isAuthenticated();
		}

	}
]);
