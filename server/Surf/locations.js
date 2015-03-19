var q = require('q');

var locations = require('./locationData.js')

function getLocations(index) {
	var deferred = q.defer();

	deferred.resolve(locations);

	return deferred.promise;
}

module.exports = {
	getLocations: getLocations
};
