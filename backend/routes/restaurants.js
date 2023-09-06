const express = require('express');
const router = express.Router();
const restaurantsCtrl = require('../controllers/restaurants');

// Restaurants CRUD routes
router.get('/', restaurantsCtrl.index);
router.post('/', restaurantsCtrl.create);
router.get('/:id', restaurantsCtrl.show);
router.get('/savedRestaurants', restaurantsCtrl.savedRest)
router.delete('/:id', restaurantsCtrl.delete); 

// External service routes
// router.post('/restaurants/search-external', restaurantsCtrl.searchAPI);
// router.post('/restaurants/detail-external', restaurantsCtrl.showAPI);
// router.get('/restaurants/currencies', restaurantsCtrl.getCurrencies);
// router.get('/restaurants/languages', restaurantsCtrl.getLanguages);
// router.get('/restaurants/typeahead', restaurantsCtrl.getTypeahead);


module.exports = router;