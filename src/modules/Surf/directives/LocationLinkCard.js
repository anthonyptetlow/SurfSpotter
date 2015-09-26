angular.module('surfspotter').directive('locationLinkCard', [ function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			location:"="
		}, // {} = isolate, true = child, false/undefined = no change
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'modules/Surf/partials/LocationLinkCard.html',
		// replace: true,
		link: function($scope) {
			console.log($scope.location);
		}
	};
}]);
