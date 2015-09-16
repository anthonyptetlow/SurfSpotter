angular.module('surfspotter').controller('ForecastController', [
	'$state',
	'SurfService',
	'forecast',
	function ($state, SurfService, forecast) {
		var Forecast = this;
		angular.extend(Forecast, forecast);

		Forecast.zoom = 10;

		Forecast.forecast[0].expanded = true;

		Forecast.setFavorite = function (isFavourite) {
			if (isFavourite) {
				SurfService.saveFavourite(Forecast.location.id).then(function () {
					// $state.reload();
					Forecast.location.isFavourite = true;
				});
			} else {
				SurfService.removeFavourite(Forecast.location.id).then(function () {
					// $state.reload();
					Forecast.location.isFavourite = false;
				});
			}
		};
	}
]);
