const { addResultServices } = require("../../services/result.services");

exports.addResultController =async ( req,res)=>{
    try {
        const data = req?.body;
  
        const result = await addResultServices(data);
        console.log("result---->", req.body);
        if (result) {
          res.status(200).json({
            status: "success",
            message: "result added Successfully",
            result: result,
          });
        } else {
          res.status(200).json({
            status: "failed",
            message: "Unable to add result ",
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