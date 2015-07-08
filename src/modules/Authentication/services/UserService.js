angular.module('surfspotter').service('UserService', [
	'$resource',
	function ($resource) {
		return $resource('/api/user/:username', {},
			{
				authenticate: {
					method: 'POST',
					url: '/api/user/auth',
					isArray: false
				},
				checkToken: {
					method: 'GET',
					url: '/api/user/token/:token',
					isArray: false
				}
			});
	}
]);
