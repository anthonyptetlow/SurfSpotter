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
				},
				getFavourite: {
					method: 'GET',
					url: '/api/msw/locations/favourite/',
					isArray: true
				},
				setFavourite: {
					method: 'POST',
					url: '/api/msw/locations/favourite/'
				}
			});

		function getForecast(spotId) {
			return forecast.get({spotId: spotId}).$promise;
		}

		function findLocations(partial) {
			return location.find({partial: partial}).$promise;
		}

		function saveFavourite(locationId) {
			return location.setFavourite({locationId: locationId}).$promise;
		}
		function getFavourites() {
			return location.getFavourites().$promise;
		}

		return {
			getForecast: getForecast,
			findLocations: findLocations,
			getFavourites: getFavourites,
			saveFavourite: saveFavourite,

		};
	}
]);
