angular.module('surfspotter').controller('LocationsController', [
    '$timeout',
    '$rootScope',
    'SurfService',
    function ($timeout, $rootScope, SurfService) {
        // console.log(locations);
        var Locations = this;

        var currentQuery;
        Locations.findLocations = function (partial) {
            if (currentQuery) {
                    $timeout.cancel(currentQuery);
            }
            if(partial.length > 0) {
                currentQuery = $timeout(function () {
                    SurfService.findLocations(partial).then(function (data) {
                        Locations.result = data;
                    });
                }, 300);
            } else {
                Locations.result.locations = [];
                Locations.result.regions = [];
            }

        };

        Locations.clearResults = function () {
            delete Locations.locationQuery;
            delete Locations.result;
        };

        $rootScope.$on('$stateChangeSuccess', function() {
            Locations.clearResults();
        });
    }
]);
