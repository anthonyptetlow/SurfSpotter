angular.module('surfspotter').service('SurfService', [
	'$http',
	'$q',
	'$resource',
	function ($http, $q, $resource) {
		var surfVersion = 'v0.2',
			forecast = $resource('/api/surf/v0.2/forecast/:locationId', {}),
			region = $resource('/api/surf/v0.2/regions/:regionId', {}),
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

		this.getForecast = function (locationId) {
			return forecast.get({locationId: locationId}).$promise;
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

		this.getRegion = function (regionId) {
			return region.get({regionId: regionId}).$promise;
		};
	}
]);
