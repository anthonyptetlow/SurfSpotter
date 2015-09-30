angular.module('surfspotter').controller('RegionController', [
    'region',
    'locations',
    'MetadataService',
    function (region, locations, MetadataService) {
        angular.extend(this, region);
        this.locations = locations;

		MetadataService.setTitle(region.name + '\'s surf spots');
		MetadataService.setDescription('A list of all the surf spots in ' + region.name + ', from here you can select a region and ');
		MetadataService.addKeyword(region.name);
		MetadataService.addKeyword('spots');
		MetadataService.addKeyword('beach');
		MetadataService.addKeyword('locations');
    }
]);
