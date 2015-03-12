angular.module('surfspotter').service('SurfService', [
	'$http',
	'$q',
	function ($http, $q) {

		function getForcast(spotId) {
			var defered = $q.defer(),
				url = '/api/msw/forecast/' + spotId;

			$http.get(url)
				.success(function(data) {
					defered.resolve(data);
				})
				.error(function(data, status) {
					defered.reject({status: status, data: data});
				});
			return defered.promise;
		}

		return {
			getForcast: getForcast
		};
	}
]);
