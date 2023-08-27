const { getAllLessonServices } = require("../../services/lesson.services");

exports.getAllLessonController = async (req, res) => {
  try {
 
    const lesson = await getAllLessonServices();
    if (lesson) {
      res.status(200).json({
        status: "success",
        lesson: lesson,
      });
    } else {
      res.status(200).json({
        status: "failed",
        message: "Unable to get lessons ",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
