angular.module('surfspotter').controller('ForecastController', [
	'forecast',
	function (forecast) {
		var Surf = this;
		Surf.place = forecast.place;
		Surf.forecast = forecast.forecast;
	}
]);
