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
		controller: function() {
			var Notifications = this;

			Notifications.removeNotification = function (indexToRemove) {
				Notifications.list.splice(indexToRemove, 1);
			};
		},
		controllerAs: 'Notifications',
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: '/modules/Notifications/partials/Notification.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, Notifications) {
			Notifications.list = [];

			$scope.$on('$stateChangeSuccess', function () {
				var newNotifications = NotificationService.shiftAllNotifications();


				newNotifications.forEach(function(message){

					if(angular.isDefined(message.type)) {
						message[message.type] = true;
					} else {
						message.info = true;
					}
					Notifications.list.push(message);

					if(message.timeout !== null) {
						$timeout(function () {
							var index = Notifications.list.indexOf(message);
							Notifications.list.splice(index, 1);
						}, message.timeout ? message.timeout : 4000);
					}

				});
			});
		}
	};
}]);
