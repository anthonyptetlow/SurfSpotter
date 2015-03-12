var express = require('express'),
    router = express.Router(),
    _ = require('lodash'),
    q = require('q');

// var mswCrawler = require('./mswCrawler.js');

var msw = require('../../Surf');
console.log('msw',msw);
router.get('/', function (req, res) {
    res.send('Welcome to the API');
});

// router.get('/spot/:spot_id', function (req, res) {
//     mswCrawler.requestLocation(req.params.spot_id)
//     .then(function (data) {
//         res.json(data).end();
//     }, function (error) {
//         res.satus(500).send(error);
//     });
// });

router.get('/forecast/:spot_id', function (req, res) {
    // console.log(msw);
    // console.log(msw.forecast);
    // console.log(msw.forecast.getForecast);
    msw.forecast.getForecast(req.params.spot_id)
    .then(function (data) {
        res.json(data).end();
    }, function (error) {
        res.satus(500).send(error);
    });
});

router.get('/locations/', function (req, res) {
    msw.locations.getLocations()
    .then(function (data) {
        res.json(data).end();
    }, function (error) {
        res.satus(500).send(error);
    });
});

module.exports = router;
