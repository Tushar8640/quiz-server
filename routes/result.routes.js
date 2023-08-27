const express = require("express");
const { addResultController } = require("../controllers/result/addResult");
const {
  getUserResultController,
} = require("../controllers/result/getResultByUserId");

const router = express.Router();

router.post("/", addResultController);
router.get("/:id", getUserResultController);

module.exports = router;
