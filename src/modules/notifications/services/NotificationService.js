angular.module('surfspotter').service('NotificationService', [
	'$localStorage',
	function ($localStorage) {
		if (angular.isUndefined($localStorage.notifications)) {
			$localStorage.notifications = [];
		}

		function addToNextState(message, type) {
			$localStorage.notifications.push({message: message, type: type});
		}

		function getNotifications() {
			return $localStorage.notifications;
		}

		function shiftNotification() {
			return $localStorage.notifications.shift();
		}

		function clearNotifications() {
			delete $localStorage.notifications;
		}

		return {
			addToNextState: addToNextState,
			getNotifications: getNotifications,
			clearNotifications: clearNotifications,
			shiftNotification: shiftNotification
		};
	}
]);
