const express = require("express");
const router = express.Router();
const impressionsCtrl = require("../controllers/impressions");

router.post("/restaurants/:id/impression", impressionsCtrl.create)


module.exports = router;