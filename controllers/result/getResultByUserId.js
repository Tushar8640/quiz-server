const { getResultByUserId } = require("../../services/result.services");

exports.getUserResultController = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const results = await getResultByUserId(id);
    if (results) {
      res.status(200).json({
        status: "success",
        results: results,
      });
    } else {
      res.status(200).json({
        status: "failed",
        message: "Unable to get results ",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
