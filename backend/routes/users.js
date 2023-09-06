const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users')

router.post('/', usersCtrl.create)
router.get('/:id', usersCtrl.show);

module.exports = router;