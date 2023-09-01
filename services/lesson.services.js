const Lesson = require("../models/lesson.model");

exports.addLessonServices = async (data) => {
  console.log(data);
  const lesson = await Lesson.create(data);
  await lesson.save({ validateBeforeSave: true });
  return lesson;
};

exports.getAllLessonServices = async () => {
  const lesson = await Lesson.find({});
  return lesson;
};
// get all todo
exports.getLessonById = async (id) => {
  try {
    const lesson = await Lesson.findById({ _id: id });
    return lesson;
  } catch (error) {
    console.log(error);
  }
};
