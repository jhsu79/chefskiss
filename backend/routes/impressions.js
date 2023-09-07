const express = require("express");
const router = express.Router();
const impressionsCtrl = require("../controllers/impressions");


router.get("/impressions/:id/edit", impressionsCtrl.edit);
router.post("/restaurants/:id/impressions", impressionsCtrl.create);
router.delete("/restaurants/:id/impressions/:impressionsId", impressionsCtrl.delete);
router.put("/impressions/:id", impressionsCtrl.update);

module.exports = router;
