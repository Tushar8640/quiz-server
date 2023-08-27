const Result = require("../models/results.model");

exports.addResultServices = async (data) => {
  const result = await Result.create(data);
  await result.save({ validateBeforeSave: true });
  return result;
};

exports.getResultByUserId = async (id) => {
  const result = await Result.find({ userId: id });
  return result;
};
