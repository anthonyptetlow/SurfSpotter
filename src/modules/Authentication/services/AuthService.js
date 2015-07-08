angular.module('surfspotter').service('AuthService', [
	'$q',
	'$sessionStorage',
	function ($q, $sessionStorage) {

		function storeToken(token) {
			$sessionStorage.token = token;
		}

		function storeUser(newUser) {
			$sessionStorage.user = newUser;
			if (newUser.token) {
				storeToken(newUser.token);
			}
		}

		function getToken() {
			return $sessionStorage.token;
		}
		function getUser() {
			return $sessionStorage.user;
		}
		function clearToken() {
			delete $sessionStorage.token;
		}

		function clearUser() {
			clearToken();
			delete $sessionStorage.user;
		}

		function isAuthenticated() {
			return angular.isDefined($sessionStorage.token);
		}

		return {
			storeToken: storeToken,
			storeUser: storeUser,
			isAuthenticated: isAuthenticated,
			getToken: getToken,
			getUser: getUser,
			clearToken: clearToken,
			clearUser: clearUser
		};
	}
]);
