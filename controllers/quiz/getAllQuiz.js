const { getAllQuizServices } = require("../../services/quiz.services");

exports.getAllQuizController = async (req, res) => {
  try {
    const quizs = await getAllQuizServices();
    if (quizs) {
      res.status(200).json({
        status: "success",
        quizs: quizs,
      });
    } else {
      res.status(200).json({
        status: "failed",
        message: "Unable to get quizs ",
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
