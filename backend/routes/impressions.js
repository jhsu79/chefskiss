const express = require('express');
const router = express.Router();
const impressionsCtrl = require('../controllers/impressions');

router.get('/restaurants/:id/impressions/new', impressionsCtrl.new)
router.get('/impressions/:id/edit', impressionsCtrl.edit)
router.post('/restaurants/:id/impressions', impressionsCtrl.create)
router.delete('/restaurants/:id/impressions/:impressionsId', impressionsCtrl.destroy)
router.put('/impressions/:id', impressionsCtrl.update)

module.exports = router; 