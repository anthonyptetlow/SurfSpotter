angular.module('surfspotter').directive('image', [
	function() {
		// Runs during compile
		return {
			scope: {
				url: '@',
				imageWidth: '@',
				imageHeight: '@'
			},
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			// templateUrl: '',
			// replace: true,
			// transclude: true,
			template: '<img class="img-responsive" data-ng-src="{{url}}" onerror="this.style.display=\'none\';">',
			replace: true,
			link: function($scope, element, attrs) {
				attrs.$set('height', element[0].offsetWidth * ($scope.imageHeight / $scope.imageWidth));
			}
		};
	}
]);
