angular.module('surfspotter').controller('RegionController', [
    'region',
    'MetadataService',
    function (region, MetadataService) {
        angular.extend(this, region.region);
        this.locations = region.locations;

		MetadataService.setTitle(region.name + '\'s surf spots');
		MetadataService.setDescription('A list of all the surf spots in ' + region.name + ', from here you can select a region and ');
		MetadataService.addKeyword(region.name);
		MetadataService.addKeyword('spots');
		MetadataService.addKeyword('beach');
		MetadataService.addKeyword('locations');
    }
]);
