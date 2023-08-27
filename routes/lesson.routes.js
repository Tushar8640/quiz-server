const express = require("express");
const { addLessonController } = require("../controllers/lesson/addLesson");
const { getAllLessonController } = require("../controllers/lesson/geAllLesson");

const router = express.Router();

router.post("/", addLessonController);
router.get("/", getAllLessonController);

module.exports = router;
