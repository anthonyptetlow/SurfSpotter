angular.module('surfspotter').controller('FavouritesController', [
	'$state',
	'SurfService',
	'NotificationService',
	'favouritesList',
	function ($state, SurfService, NotificationService, favouritesList) {
		var Favourites = this;
		Favourites.list = favouritesList;

		Favourites.remove = function (id) {
			SurfService.removeFavourite(id).then(function () {
                NotificationService.addToNextState('Location removed from favorites', 'danger', 2000);
				$state.reload();
			}, function() {
                NotificationService.addToNextState('Unable to remove location from favourites', 'danger', 2000);
				$state.reload();
			});
		};
	}
]);
