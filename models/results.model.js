const mongoose = require("mongoose");

const reaultSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    quizId: { type: String, required: true },
    responses: [
      {
        questionNo: { type: String, required: true },
        selectedOption: { type: String, required: true },
        correctAnswer: { type: String, required: true },
        isCorrect: { type: Boolean, required: true },
      },
    ],
  },

  {
    timestamps: true,
  }
);

const Result = mongoose.model("Result", reaultSchema);
module.exports = Result;
