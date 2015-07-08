angular.module('surfspotter').controller('LocationController', [
    '$timeout',
    'SurfService',
    function ($timeout, SurfService) {
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
                        Locations.locations = data;
                    });
                }, 300);
            } else {
                Locations.locations = [];
            }

        };
    }
]);