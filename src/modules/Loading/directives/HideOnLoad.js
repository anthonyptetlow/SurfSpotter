angular.module('surfspotter').directive('hideOnLoad', [
	function(){
		return {
			priority: -1000,
			controller: function($scope, $element) {
				$scope.$on('$viewContentLoaded', function () {
					$element.addClass('hide');
				});
			}
		};
	}
]);
