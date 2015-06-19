angular.module('surfspotter').service('AuthService', [
	'$http',
	'$q',
	'$sessionStorage',
	function ($http, $q, $sessionStorage) {
		function storeToken(token) {
			$sessionStorage.token = token;
		}
		function getToken() {
			return $sessionStorage.token;
		}
		function clearToken() {
			delete $sessionStorage.token;
		}

		function isAuthenticated() {
			return !!$sessionStorage.token;
		}

		return {
			storeToken: storeToken,
			isAuthenticated: isAuthenticated,
			getToken: getToken,
			clearToken: clearToken
		};
	}
]);
