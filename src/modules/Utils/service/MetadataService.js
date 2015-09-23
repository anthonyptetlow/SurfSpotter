angular.module('surfspotter').service('MetadataService', [
	function () {
		var Metadata = {};
		this.setImage = function (url) {
			Metadata.image = url;
		};

		this.getImage = function () {
			return Metadata.image;
		};

		this.setDescription = function (description) {
			Metadata.description = description;
		};

		this.getDescription = function () {
			return Metadata.description;
		};

		this.addKeyword = function (keyword) {
			Metadata.keywords.push(keyword);
		};

		this.getKeywordString = function () {
			return Metadata.keywords.join(', ');
		};

		this.setTitle = function (title) {
			Metadata.title = title;
		};

		this.getTitle = function () {
			return Metadata.title;
		};

		this.reset = function () {
			Metadata = {
				description: 'Your go to 7 day Surf forecast app. Get Notifications when the best waves for surfing are forecast to hit the shore. Never miss a good surf break again!',
				image: '/assets/wave2.png',
				keywords: ['surf report', 'surf forecast', 'surfing', 'surf notification', 'surf', 'waves']
			};
		};

		this.reset();
		return this;
	}
]);
