const Lesson = require("../models/lesson.model");

exports.addLessonServices = async (data) => {
  const lesson = await Lesson.create(data);
  await lesson.save({ validateBeforeSave: true });
  return lesson;
};

exports.getAllLessonServices = async () => {
  const lesson = await Lesson.find({});
  return lesson;
};
