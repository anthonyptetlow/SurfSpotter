angular.module('surfspotter').controller('ForecastController', [
	'$state',
	'SurfService',
	'forecast',
	function ($state, SurfService, forecast) {
		var Forecast = this;
		angular.extend(Forecast, forecast);

		Forecast.setFavorite = function (isFavourite) {
			if (isFavourite) {
				SurfService.saveFavourite(Forecast.place.id).then(function () {
					$state.reload();
				});
			} else {
				SurfService.removeFavourite(Forecast.place.id).then(function () {
					$state.reload();
				});
			}
		};
	}
]);
