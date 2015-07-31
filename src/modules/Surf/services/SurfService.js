angular.module('surfspotter').service('SurfService', [
	'$http',
	'$q',
	'$resource',
	function ($http, $q, $resource) {

		var forecast = $resource('/api/surf/v0.0/forecast/:spotId', {}),
			location = $resource('/api/surf/v0.1/locations', {}, {
				find: {
					method: 'GET',
					url: '/api/surf/v0.1/locations/find/:partial',
					isArray: true
				},
				getFavourites: {
					method: 'GET',
					url: '/api/surf/v0.1/locations/favourite/',
					isArray: true
				},
				setFavourite: {
					method: 'POST',
					url: '/api/surf/v0.1/locations/favourite/'
				},
				removeFavourite: {
					method: 'DELETE',
					url: '/api/surf/v0.1/locations/favourite/'
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
		function removeFavourite(locationId) {
			return location.removeFavourite({locationId: locationId}).$promise;
		}
		return {
			getForecast: getForecast,
			findLocations: findLocations,
			getFavourites: getFavourites,
			saveFavourite: saveFavourite,
			removeFavourite: removeFavourite

		};
	}
]);
