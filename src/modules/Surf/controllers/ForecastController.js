angular.module('surfspotter').controller('ForecastController', [
	'$state',
	'SurfService',
	'MetadataService',
	'forecast',
	function ($state, SurfService, MetadataService, forecast) {
		var Forecast = this;
		angular.extend(Forecast, forecast);

		MetadataService.setImage(forecast.location.image.url);
		MetadataService.setTitle(forecast.location.name + ' Surf Forecast');

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
