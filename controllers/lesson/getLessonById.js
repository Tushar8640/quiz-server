const { getLessonById } = require("../../services/lesson.services");

exports.getSingleLessonController = async (req, res) => {
  try {
    const id = req?.params.id;
    const lesson = await getLessonById(id);
    console.log(id);
    if (lesson) {
      return res.status(200).json({
        status: "success",
        lesson: lesson,
      });
    } else {
      return res.status(400).json({
        status: "failed",
        message: " can't get the lesson",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
