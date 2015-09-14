angular.module('surfspotter').directive('notification', [
	'$timeout',
	'$rootScope',
	'NotificationService',
	function ($timeout, $rootScope, NotificationService) {
	// Runs during compile
	return {
		controller: function() {
			var Notifications = this;

			Notifications.dismissNotification = function () {
				Notifications.current = undefined;
			};
		},
		controllerAs: 'Notifications',
		templateUrl: 'modules/Notifications/partials/Notification.html',
		link: function($scope, iElm, iAttrs, Notifications) {
			// Notifications.list = [];

			function displayNextNotification() {
				var message = NotificationService.shiftNotification();

				if(angular.isDefined(message.type)) {
					message[message.type] = true;
				} else {
					message.info = true;
				}
				Notifications.current = message;

				if(message.timeout !== null) {
					$timeout(function () {
						Notifications.current = undefined;

						if(NotificationService.hasNotifications()){
							displayNextNotification();
						}

					}, message.timeout ? message.timeout : 4000);
				}
			}


			$rootScope.$on('NEW_NOTIFICATION', function () {
				if(angular.isUndefined(Notifications.current)) {
					displayNextNotification();
				}
			});
		}
	};
}]);
