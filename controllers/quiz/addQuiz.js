const { addQuizServices } = require("../../services/quiz.services");

exports.addQuizController =async ( req,res)=>{
    try {
        const data = req?.body;
  
        const quiz = await addQuizServices(data);
        console.log("quiz---->", req.body);
        if (quiz) {
          res.status(200).json({
            status: "success",
            message: "quiz added Successfully",
            quiz: quiz,
          });
        } else {
          res.status(200).json({
            status: "failed",
            message: "Unable to add quiz ",
          });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
          status: "failed",
          message: error.message,
        });
    }
}