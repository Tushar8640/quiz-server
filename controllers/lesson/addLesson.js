const { addLessonServices } = require("../../services/lesson.services");

exports.addLessonController = async (req, res) => {
  try {
    const data = req.body;
    console.log("body", data, req.file);

    const pdfFileLink = req.file.path; // Get the file path from multer

    // Check if a file was uploaded
    if (!pdfFileLink) {
      return res.status(400).json({
        status: "failed",
        message: "No PDF file provided",
      });
    }

    // Update the data to include the file link
    data.pdfLink = pdfFileLink;

    console.log(data);
    const lesson = await addLessonServices(data);

    if (lesson) {
      res.status(200).json({
        status: "success",
        message: "Lesson added Successfully",
        lesson: lesson,
      });
    } else {
      res.status(200).json({
        status: "failed",
        message: "Unable to add Lesson ",
      });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
