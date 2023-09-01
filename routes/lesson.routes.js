const express = require("express");
const { addLessonController } = require("../controllers/lesson/addLesson");
const { getAllLessonController } = require("../controllers/lesson/geAllLesson");
const {
  getSingleLessonController,
} = require("../controllers/lesson/getLessonById");

const router = express.Router();

const multer = require("multer");
const path = require("path");

// Define the storage and file name settings for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Destination directory for uploaded files
  },
  filename: function (req, file, cb) {
    // Define the filename as a unique name with the original extension
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

// Create a multer instance with the defined storage settings
const upload = multer({ storage: storage });

router.post("/", upload.single("pdfFile"), addLessonController);
router.get("/", getAllLessonController);
router.get("/:id", getSingleLessonController);

module.exports = router;
