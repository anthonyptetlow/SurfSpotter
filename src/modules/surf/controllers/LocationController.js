angular.module('surfspotter').controller('LocationController', [
	'locations',
	function (locations) {
		// console.log(locations);
		var Locations = this;
		Locations.locations = locations;
	}
]);
