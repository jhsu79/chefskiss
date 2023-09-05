var express = require('express');
var router = express.Router();

/* localhost 4000 */
router.get('/', function(req, res, next) {
  res.send('test');
});

module.exports = router;
