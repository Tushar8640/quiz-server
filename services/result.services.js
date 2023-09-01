const Result = require("../models/results.model");

exports.addResultServices = async (data) => {
  const result = await Result.create(data);
  await result.save({ validateBeforeSave: true });
  return result;
};

exports.getResultByUserId = async (id) => {
  console.log(id);
  const result = await Result.find({ userId: id });
  console.log(result);
  return result;
};
