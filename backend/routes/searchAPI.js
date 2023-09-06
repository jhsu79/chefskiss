const express = require('express');
const router = express.Router();
const searchAPICtrl = require('../controllers/searchAPI');

// External service routes
router.post('/search/search-external', searchAPICtrl.searchAPI);
router.post('/search/detail-external', searchAPICtrl.indexAPI);
router.get('/search/currencies', searchAPICtrl.getCurrencies);
router.get('/search/languages', searchAPICtrl.getLanguages);
router.get('/search/typeahead', searchAPICtrl.getTypeahead);

module.exports = router