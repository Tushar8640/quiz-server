const express = require("express");
const { addQuizController } = require("../controllers/quiz/addQuiz");
const { getAllQuizController } = require("../controllers/quiz/getAllQuiz");
const { getSingleQuizController } = require("../controllers/quiz/getQuizById");
const { getLessonQuizController } = require("../controllers/quiz/getQuizByLessonId");

const router = express.Router();

router.post("/addquiz", addQuizController);
// router.delete("/deletequiz/:id", deleteTodoController);
router.get("/allquiz", getAllQuizController);
router.get("/:id", getSingleQuizController);
router.get("/lesson/:id", getLessonQuizController);
// router.patch("/edittodo/:id", editTodoController);

module.exports = router;
