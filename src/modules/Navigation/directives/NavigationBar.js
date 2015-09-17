angular.module('surfspotter').directive('navigationBar', [
	'$state',
	'AuthService',
	'NotificationService',
	function($state, AuthService, NotificationService) {
		return {
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function() {
				var NavigationBar = this;
				NavigationBar.isUserAuthenticated = AuthService.isAuthenticated;

				NavigationBar.signOut = function () {
					AuthService.clearToken();
					NotificationService.addToNextState('You are now signed out', 'success', 2000);
					$state.reload();
				};

				NavigationBar.signIn = function () {
					if ($state.current.name !== 'signIn' || $state.current.name !== 'signUp') {
						AuthService.storePreAuthState($state.current.name, $state.params);
					}
					$state.go('signIn');
				};

				NavigationBar.signUp = function () {
					if ($state.current.name !== 'signIn' || $state.current.name !== 'signUp') {
						AuthService.storePreAuthState($state.current.name, $state.params);
					}
					$state.go('signUp');
				};

				NavigationBar.getUser = AuthService.getUser;

			},
			controllerAs: 'NavigationBar',
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			templateUrl: 'modules/Navigation/partials/NavigationBar.html',
			replace: true,
			link: function() {}
		};
	}
]);
