angular.module('surfspotter').service('NotificationService', [
	'$localStorage',
	function ($localStorage) {
		if (angular.isUndefined($localStorage.notifications)) {
			$localStorage.notifications = [];
		}

		function addToNextState(message, type, timeout) {
			$localStorage.notifications.push({message: message, type: type, timeout: timeout});
		}

		// function getNotifications() {
		// 	return $localStorage.notifications;
		// }

		function shiftNotification() {
			return $localStorage.notifications.shift();
		}

		function shiftAllNotifications() {
			var notifications = $localStorage.notifications;
			$localStorage.notifications = [];
			return notifications;
		}

		return {
			addToNextState: addToNextState,
			// getNotifications: getNotifications,
			shiftNotification: shiftNotification,
			shiftAllNotifications: shiftAllNotifications
		};
	}
]);
