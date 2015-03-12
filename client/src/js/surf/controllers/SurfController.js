angular.module('surfspotter').controller('SurfController', [
	'$http',
	function ($http) {
		var Surf = this;

		// $http.get('//magicseaweed.com/syndicate/rss/index.php?id=85&unit=uk')
		// .success(function (data) {
		// 	console.log(data);
		// })
		// .error(function (data){
		// 	console.log(data);
		// });

		Surf.locations = [
			{
				name: 'Dunbar',
				qualityString: 'Good Surfing',
				starts: 4,
				swellHeight: 2,
				swellPeriod: 30,
				distance: 80
			},
			{
				name: 'Machrihanish',
				qualityString: 'Good Surfing',
				starts: 5,
				swellHeight: 5,
				swellPeriod: 30,
				distance: 15
			},
			{
				name: 'Isle of Arran',
				qualityString: 'No Surfing',
				starts: 0,
				swellHeight: 0.3,
				swellPeriod: 10,
				distance: 0.01
			}
		];

	}
]);
