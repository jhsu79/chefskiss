const express = require('express');
const router = express.Router();
const restaurantsCtrl = require('../controllers/restaurants')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
