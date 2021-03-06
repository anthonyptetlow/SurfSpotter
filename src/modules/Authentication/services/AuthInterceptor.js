angular.module('surfspotter').factory('TokenInterceptor', [
    '$q',
    '$injector',
    'AuthService',
    'NotificationService',
    function ($q, $injector, AuthService, NotificationService) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if (AuthService.isAuthenticated() && config.url.indexOf('/api/') === 0) {
                    config.url += (config.url.indexOf('?') > 0 ? '&' : '?') + 'token=' + AuthService.getToken();
                }

                return config;
            },

            requestError: function(rejection) {
                return $q.reject(rejection);
            },

            // response: function (response) {
            // },

            /* Revoke client authentication if 401 is received */
            responseError: function(rejection) {
                if (rejection != null && rejection.status === 401 && AuthService.isAuthenticated()) {
                    AuthService.clearToken();
                    //Redirect to signin
                    NotificationService.addToNextState('You are not logged in or your sesison has expired. Please login again.', 'danger', null);
                    $injector.get('$state').go('signIn');
                }

                return $q.reject(rejection);
            }
        };
    }
]);

angular.module('surfspotter').config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
}]);
