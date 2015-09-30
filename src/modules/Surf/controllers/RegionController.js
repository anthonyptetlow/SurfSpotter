angular.module('surfspotter').controller('RegionController', [
    'region',
    'locations',
    function (region, locations) {
        angular.extend(this, region);
        this.locations = locations;
    }
]);
