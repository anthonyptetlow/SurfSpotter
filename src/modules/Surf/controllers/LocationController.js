angular.module('surfspotter').controller('LocationController', [
    'location',
    function (location) {
        angular.extend(this, location);
    }
]);
