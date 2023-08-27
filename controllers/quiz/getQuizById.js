const { getQuizById } = require("../../services/quiz.services");

exports.getSingleQuizController = async (req, res) => {
  try {
    const id = req?.params.id;
    const quiz = await getQuizById(id);
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
