angular.module('surfspotter').directive('notification', [
	'$timeout',
	'NotificationService',
	function ($timeout, NotificationService) {
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: function() {},
		controllerAs: 'Notification',
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: '/modules/notifications/partials/Notification.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, Notification) {

			$scope.$on('$stateChangeSuccess', function () {
				var newNotification = NotificationService.shiftNotification();
				if(angular.isDefined(newNotification)) {

					Notification.message = newNotification.message;

					if(angular.isDefined(newNotification.type)) {
						Notification[newNotification.type] = true;
					} else {
						Notification.info = true;
					}

					$timeout(function () {
						Notification.message = undefined;
						Notification.type = undefined;
					}, 4000);
				}
			});



		}
	};
}]);
