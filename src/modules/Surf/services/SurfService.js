angular.module('surfspotter').service('SurfService', [
	'$http',
	'$q',
	'$resource',
	function ($http, $q, $resource) {
		var forecast = $resource('/api/msw/forecast/:spotId', {}),
			location = $resource('/api/msw/locations', {}, {
				find: {
					method: 'GET',
					url: '/api/msw/locations/find/:partial',
					isArray: true
				}});

		function getForecast(spotId) {
			return forecast.get({spotId: spotId}).$promise;
		}
		// function getLocations() {
		// 	return getUrl('/api/msw/locations').$promise;
		// }

		function findLocations(partial) {
			return location.find({partial: partial}).$promise;
		}

		return {
			getForecast: getForecast,
			// getLocations: getLocations,
			findLocations: findLocations
		};
	}
]);
