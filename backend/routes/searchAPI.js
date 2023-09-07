const express = require('express');
const router = express.Router();
const searchAPICtrl = require('../controllers/searchAPI');

// searchYelp route
router.post('/yelp-search', searchAPICtrl.searchYelp);

module.exports = router