var express = require('express'),
    router = express.Router(),
    _ = require('lodash'),
    q = require('q');

var msw = require('../../Surf');

router.get('/', function (req, res) {
    res.send('Welcome to the API');
});

router.get('/forecast/:spot_id', function (req, res) {
    msw.forecast.getForecast(req.params.spot_id)
    .then(function (data) {
        res.json(data).end();
    }, function (error) {
        res.satus(500).send(error);
    });
});

router.get('/locations', function (req, res) {
    msw.locations.getLocations()
    .then(function (data) {
        res.json(data).end();
    }, function (error) {
        res.satus(500).send(error);
    });
});

module.exports = router;
