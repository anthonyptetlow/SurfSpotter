angular.module('surfspotter').directive('foundBug', [
	function() {
		// Runs during compile
		return {
			templateUrl: 'modules/Utils/partials/found-a-bug.html',
			link: function() {}
		};
	}
]);
