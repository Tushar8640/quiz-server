const { getQuizByLessonId } = require("../../services/quiz.services");

exports.getLessonQuizController = async (req, res) => {
  try {
    const id = req?.params.id;
    const quiz = await getQuizByLessonId(id);
    if (quiz) {
      return res.status(200).json({
        status: "success",
        quiz: quiz,
      });
    } else {
      return res.status(400).json({
        status: "failed",
        message: " can't get the quiz",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
