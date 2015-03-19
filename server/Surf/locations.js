var q = require('q'),
	_ = require('lodash');

var LocationModel = require('./models/Location.js');

function createLocation(id, name) {
	var deferred = q.defer();
	var location = new LocationModel();
	location._id = id;
	location.name = name;
	location.save(function (error) {
		if (error) {
			deferred.reject(error);
		} else {
			deferred.resolve();
		}
	});
	return deferred.promise;
}

function getAllLocations() {
	console.log('getting stored locs');
	var deferred = q.defer();
	LocationModel.find(function (error, locations) {
		if (error) {
			deferred.reject(error);
		} else {
			deferred.resolve(_(locations).map(function(loc){
				return {
					id: loc._id,
					name: loc.name
				};
			}));
		}
	});
	return deferred.promise;
}

module.exports = {
	createLocation: createLocation,
	getLocations: getAllLocations
};
