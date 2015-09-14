angular.module('surfspotter').service('NotificationService', [
	'$rootScope',
	function ($rootScope) {

		var notifications = [];

		function addNotification(message, type, timeout) {
			notifications.push({message: message, type: type, timeout: timeout});
			$rootScope.$emit('NEW_NOTIFICATION');
		}

		function getNotifications() {
			return notifications;
		}

		function hasNotifications() {
			return notifications.length > 0;
		}

		function shiftNotification() {
			return notifications.shift();
		}

		function shiftAllNotifications() {
			var notificationsToReturn = notifications;
			notifications = [];
			return notificationsToReturn;
		}

		return {
			addToNextState: addNotification,
			getNotifications: getNotifications,
			hasNotifications: hasNotifications,
			shiftNotification: shiftNotification,
			shiftAllNotifications: shiftAllNotifications
		};
	}
]);
