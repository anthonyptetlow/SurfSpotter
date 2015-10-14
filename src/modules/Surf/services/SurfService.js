angular.module('surfspotter').service('SurfService', [
	'$http',
	'$q',
	'$resource',
	function ($http, $q, $resource) {
		var surfVersion = 'v0.2',
			forecast = $resource('/api/surf/v0.3/forecast/:spotMachineName', {}),
			region = $resource('/api/surf/v0.3/regions/:regionMachineName', {}, {
				getLocationsInRegion: {
					method: 'GET',
					url: 'api/surf/v0.2/regions/locations/:regionId',
					isArray: true
				}
			}),
			location = $resource('/api/surf/' + surfVersion + '/locations/:locationId', {}, {
				find: {
					method: 'GET',
					url: '/api/surf/' + surfVersion + '/locations/find/:partial',
					isArray: false
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

		this.getForecast = function (spotMachineName) {
			return forecast.get({spotMachineName: spotMachineName}).$promise;
		};

		this.findLocations = function (partial) {
			return location.find({partial: partial}).$promise;
		};

		this.getLocation = function (locationId) {
			return location.get({locationId: locationId}).$promise;
		};

		this.saveFavourite = function (locationId) {
			return location.setFavourite({locationId: locationId}).$promise;
		};
		this.getFavourites = function () {
			return location.getFavourites().$promise;
		};
		this.removeFavourite = function (locationId) {
			return location.removeFavourite({locationId: locationId}).$promise;
		};

		this.getAllLocations = function () {
			return location.query().$promise;
		};

		this.getRegion = function (regionMachineName) {
			return region.get({regionMachineName: regionMachineName}).$promise;
		};

		this.getLocationsInRegion = function (regionId) {
			return region.getLocationsInRegion({regionId: regionId}).$promise;
		};
	}
]);
