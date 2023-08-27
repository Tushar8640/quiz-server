const mongoose = require("mongoose");
const lessonSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
    pdfLink: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Lesson = mongoose.model("Lesson", lessonSchema);
module.exports = Lesson;
