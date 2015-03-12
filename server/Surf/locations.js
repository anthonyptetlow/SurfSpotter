var q = require('q');

var locations = [
	{
	 id: 1,
	 name: 'Newquay - Fistral North'
	},
	{
	 id: 2,
	 name: 'Porthtowan'
	},
	{
	 id: 3,
	 name: 'Gwithian'
	},
	{
	 id: 4,
	 name: 'Sennen'
	},
	{
	 id: 5,
	 name: 'Constantine'
	},
	{
	 id: 6,
	 name: 'Bude - Crooklets'
	},
	{
	 id: 7,
	 name: 'Croyde Beach'
	},
	{
	 id: 8,
	 name: 'Praa Sands'
	},
	{
	 id: 9,
	 name: 'Whitsand Bay'
	},
	{
	 id: 10,
	 name: 'Bantham'
	}
];


function getLocations(index) {
	var deferred = q.defer();

	deferred.resolve(locations);

	return deferred.promise;
}

module.exports = {
	getLocations: getLocations
};
