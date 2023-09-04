const express = require('express');
const router = express.Router();
const restaurantsCtrl = require('../controllers/restaurants');

// Restaurants CRUD routes
router.get('/', restaurantsCtrl.index);
router.post('/', restaurantsCtrl.create);
router.get('/:id', restaurantsCtrl.show);
router.put('/:id', restaurantsCtrl.update);
router.delete('/:id', restaurantsCtrl.delete); 


module.exports = router;