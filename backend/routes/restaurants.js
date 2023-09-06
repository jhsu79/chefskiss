const express = require('express');
const router = express.Router();
const restaurantsCtrl = require('../controllers/restaurants');

// External service routes 
// Changed route to create issues.  
// We could create different controllers/modules for the API.  
// Move above CRUD Routes, Avoids hitting the wildcard first. 
router.post('/api/search-external', restaurantsCtrl.searchAPI);
router.post('/api/detail-external', restaurantsCtrl.showAPI);
router.get('/api/currencies', restaurantsCtrl.getCurrencies);
router.get('/api/languages', restaurantsCtrl.getLanguages);
router.get('/api/typeahead', restaurantsCtrl.getTypeahead);

// Restaurants CRUD routes
router.get('/', restaurantsCtrl.index);
router.post('/', restaurantsCtrl.create);
router.get('/:id', restaurantsCtrl.show);
router.get('/savedRestaurants', restaurantsCtrl.savedRest)
router.delete('/:id', restaurantsCtrl.delete); 



module.exports = router;