angular.module('surfspotter').controller('FavouritesController', [
	'$state',
	'SurfService',
	'NotificationService',
	'favouritesList',
	function ($state, SurfService, NotificationService, favouritesList) {
		var Favourites = this;
		Favourites.list = favouritesList;

		Favourites.remove = function (location) {
			SurfService.removeFavourite(location.id).then(function () {
                NotificationService.addToNextState(location.name + ' removed from favorites', 'success', 2000);
				$state.reload();
			}, function() {
                NotificationService.addToNextState('Unable to remove ' + location.name + ' from favourites', 'danger', 2000);
				$state.reload();
			});
		};
	}
]);
