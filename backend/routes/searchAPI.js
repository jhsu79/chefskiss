const express = require('express');
const router = express.Router();
const searchAPICtrl = require('../controllers/searchAPI');

// External service routes
router.post('/search/search-external', searchCtrl.searchAPI);
router.post('/search/detail-external', searchCtrl.indexAPI);
router.get('/search/currencies', searchCtrl.getCurrencies);
router.get('/search/languages', searchCtrl.getLanguages);
router.get('/search/typeahead', searchCtrl.getTypeahead);

module.exports = router