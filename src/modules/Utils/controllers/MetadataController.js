angular.module('surfspotter').controller('MetadataController', [
	'$rootScope',
	'$location',
	'$document',
	'MetadataService',
	function ($rootScope, $location, $document, MetadataService) {
		// console.log($location);
		var Metadata = this;

		Metadata.path = function () {
			return $location.$$absUrl;
		};

		Metadata.image = function () {
			return $location.protocol() + '://' + $location.host() + MetadataService.getImage();
		};

		Metadata.description = MetadataService.getDescription;

		Metadata.keywords = MetadataService.getKeywordString;

		Metadata.title = function () {
			return angular.isDefined(MetadataService.getTitle()) ? MetadataService.getTitle() + ' | Surf Spotter' : 'Surf Spotter';
		};

		$rootScope.$on('$stateChangeStart', MetadataService.reset);
	}
]);
