var router = require('express').Router();
var weatherController = require('./weather/weatherController.js');
var phraseController = require('./phrases/phraseController.js');
var transportationController = require('./transportation/transportationController.js');
var logicController = require('./logic/weatherLogicController');
var eventsController = require('./events/eventsController');

router.get('/api/weather/', weatherController.getHourly, logicController.getWeatherPhrases, phraseController.getPhrases);
router.get('/api/transportation/', transportationController.getTransportEvents);
router.get('/api/phrases/', phraseController.getPhrases);
router.post('/api/phrases/', phraseController.addPhrase);
router.get('/api/events/', eventsController.getEvents);	




module.exports = router
