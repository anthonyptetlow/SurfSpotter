angular.module('surfspotter').service('SurfService', [
	'$http',
	'$q',
	'$resource',
	function ($http, $q, $resource) {
		var surfVersion = 'v0.2',
			forecast = $resource('/api/surf/v0.2/forecast/:locationId', {}),
			location = $resource('/api/surf/' + surfVersion + '/locations/:locationId', {}, {
				find: {
					method: 'GET',
					url: '/api/surf/' + surfVersion + '/locations/find/:partial',
					isArray: true
				},
				getFavourites: {
					method: 'GET',
					url: '/api/surf/' + surfVersion + '/locations/favourite/',
					isArray: true
				},
				setFavourite: {
					method: 'POST',
					url: '/api/surf/' + surfVersion + '/locations/favourite/'
				},
				removeFavourite: {
					method: 'DELETE',
					url: '/api/surf/' + surfVersion + '/locations/favourite/'
				}
			});

		function getForecast(locationId) {
			return forecast.get({locationId: locationId}).$promise;
		}

		function findLocations(partial) {
			return location.find({partial: partial}).$promise;
		}

		function getLocation(locationId) {
			return location.get({locationId: locationId}).$promise;
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
			removeFavourite: removeFavourite,
			getLocation: getLocation

		};
	}
]);
