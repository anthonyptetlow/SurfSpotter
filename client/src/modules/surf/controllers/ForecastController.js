angular.module('surfspotter').controller('ForecastController', [
	'forecast',
	function (forecast) {
		var Surf = this;
		Surf.place = forecast.place;
		console.log(forecast);
		Surf.forecast = forecast.forecast;
	}
]);
