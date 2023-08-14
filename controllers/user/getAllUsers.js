const { getAllUserServices } = require("../../services/user.services");

exports.getAllUserController = async (req, res) => {
  try {
    const users = await getAllUserServices();
    if (users) {
      res.status(200).json({
        status: "success",
        users: users,
      });
    } else {
      res.status(200).json({
        status: "failed",
        message: "Unable to get users ",
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
