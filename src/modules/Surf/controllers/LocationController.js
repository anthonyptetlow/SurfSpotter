angular.module('surfspotter').controller('LocationController', [
    'MetadataService',
    'location',
    function (MetadataService, location) {
        angular.extend(this, location);

        MetadataService.setTitle('All surf spots');
		MetadataService.setDescription('A list of all the surf spots on surf spotter. From here you can select a location and view it\'s surfing forecast');
		MetadataService.addKeyword('spots');
		MetadataService.addKeyword('beach');
		MetadataService.addKeyword('locations');
    }
]);
