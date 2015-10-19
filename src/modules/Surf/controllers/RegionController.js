angular.module('surfspotter').controller('RegionController', [
    'region',
    'MetadataService',
    function (region, MetadataService) {
        angular.extend(this, region.region);
        this.locations = region.locations;
        console.log(region);
		MetadataService.setTitle(this.name + '\'s surf spots');
		MetadataService.setDescription('A list of all the surf spots in ' + this.name + ', from here you can select a location and view it\'s surfing forecast');
		MetadataService.addKeyword(this.name);
		MetadataService.addKeyword('spots');
		MetadataService.addKeyword('beach');
		MetadataService.addKeyword('locations');
    }
]);
