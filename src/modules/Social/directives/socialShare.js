angular.module('surfspotter').directive('socialShare', [
	function() {
		// Runs during compile
		return {
			templateUrl: 'modules/Social/partials/SocialLinks.html',
			controller: ['$location', function ($location) {

				this.getURL = function () {
					return $location.$$absUrl;
				};
			}],
			controllerAs: 'Social',
			replace: true,
			link: function() {}
		};
	}
]);
