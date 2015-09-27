angular.module('surfspotter').directive('locationLinkCard', [ function(){
	// Runs during compile
	return {
		scope: {
			location: '='
		},
		restrict: 'A',
		templateUrl: 'modules/Surf/partials/LocationLinkCard.html'
	};
}]);
