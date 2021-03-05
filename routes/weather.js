const express = require('express');
const {
    getWeather,getTopFive,getLastSearched,getData
} = require('../controllers/weather');

const router = express.Router();
router.route('/').get(getData);
router.route('/most_searched').get(getTopFive);
router.route('/last_searched').get(getLastSearched);
router.route('/city/:city').get(getWeather);

module.exports = router;