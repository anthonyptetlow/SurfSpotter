angular.module('surfspotter').controller('ForcastController', [
	'forcast',
	function (forcast) {
		var Surf = this;
		Surf.place = forcast.place;
		Surf.forcast = forcast.forcast;
	}
]);
