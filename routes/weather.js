const express = require('express');
const {
    saveWeather,getTopFive,getLastSearched,getData
} = require('../controllers/weather');

const router = express.Router();
router.route('/').get(getData);
router.route('/most_searched').get(getTopFive);
router.route('/last_results').get(getLastSearched);
router.route('/city/:city').get(saveWeather);

module.exports = router;