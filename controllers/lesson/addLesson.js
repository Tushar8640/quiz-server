const { addLessonServices } = require("../../services/lesson.services");

exports.addLessonController =async ( req,res)=>{
    try {
        const data = req?.body;
  
        const lesson = await addLessonServices(data);
        console.log("Lesson---->", req.body);
        if (lesson) {
          res.status(200).json({
            status: "success",
            message: "lesson added Successfully",
            lesson: lesson,
          });
        } else {
          res.status(200).json({
            status: "failed",
            message: "Unable to add Lesson ",
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