angular.module('surfspotter').controller('ForecastController', [
	'$state',
	'SurfService',
	'forecast',
	function ($state, SurfService, forecast) {
		var Forecast = this;
		Forecast.place = forecast.place;
		Forecast.forecast = forecast.forecast;

		Forecast.setFavorite = function (isFavourite) {
			console.log(isFavourite);
			if (isFavourite) {
				SurfService.saveFavourite().then(function (data) {
					console.log(data);
				}, function (error) {
					console.log(error);

				});
			} else {

			}
		};
	}
]);
