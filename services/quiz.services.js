const Quiz = require("../models/quiz.model");

// add todo
exports.addQuizServices = async (data) => {
  const quiz = await Quiz.create(data);
  await quiz.save({ validateBeforeSave: true });
  return quiz;
};

// delete todo
exports.deleteQuizServices = async ({ id }) => {
  try {
    console.log(id);
    const quiz = await Quiz.findByIdAndDelete({ _id: id });

    return quiz;
  } catch (error) {
    console.log(error.message);
  }
};

// get all todo
exports.getAllQuizServices = async () => {
  try {
    const quizs = await Quiz.find({}).sort({ createdAt: -1 });
    return quizs;
  } catch (error) {
    console.log(error);
  }
};
// get all todo
exports.getQuizById = async (id) => {
  try {
    const quiz = await Quiz.findById({ _id: id });
    return quiz;
  } catch (error) {
    console.log(error);
  }
};

exports.getQuizByLessonId = async (id) => {
  try {
    const quiz = await Quiz.find({ lessonId: id });
    return quiz;
  } catch (error) {
    console.log(error);
  }
};
