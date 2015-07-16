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
				SurfService.saveFavourite(Forecast.place.id).then(function (data) {
					console.log(data);
					$state.reload();
				}, function (error) {
					console.log(error);

				});
			} else {
				SurfService.removeFavourite(Forecast.place.id).then(function (data) {
					console.log(data);
					$state.reload();
					// $state.go($state.current, {}, {reload: true});
				}, function (error) {
					console.log(error);
				});
			}
		};
	}
]);
