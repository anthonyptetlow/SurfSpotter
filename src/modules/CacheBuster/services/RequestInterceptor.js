angular.module('surfspotter').factory('RequestInteceptor', [
    '$q',
    function ($q) {
        return {
            request: function (conf) {
                if (conf.url.indexOf('/api/') === 0 && conf.method === 'GET') {
                    conf.url += (conf.url.indexOf('?') > 0 ? '&' : '?') + new Date().getTime();
                }
                return conf;
            },
            response: function (response) {
                return response || $q.when(response);
            },
            responseError: function(rejection) {
                return $q.reject(rejection);
            }
        };
    }
]);

angular.module('surfspotter').config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('RequestInteceptor');
}]);
