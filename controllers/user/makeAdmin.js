const { makeAdminService } = require("../../services/user.services");

exports.makeAdminController = async (req, res) => {
  try {
    const id = req.body.id
    const users = await makeAdminService(id);
    if (users) {
      res.status(200).json({
        status: "success",
        users: users,
      });
    } else {
      res.status(200).json({
        status: "failed",
        message: "Unable to make changes ",
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
