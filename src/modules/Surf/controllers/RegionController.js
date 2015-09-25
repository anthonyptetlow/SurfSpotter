angular.module('surfspotter').controller('RegionController', [
    'region',
    function (region) {
        angular.extend(this, region);
    }
]);
