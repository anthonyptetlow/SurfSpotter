angular.module('surfspotter').controller('LocationListController', [
    'locations',
    function (locations) {
        this.locations = locations;
    }
]);
