const mongoose = require("mongoose");
const quizSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Quiz = mongoose.model("Quiz", quizSchema);
module.exports = Quiz;
