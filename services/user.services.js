const User = require("../models/user.model");

// get user by email
exports.addUser = async (data) => {
  try {
    const user = await User.create(data);
    if (user) {
      const { password, ...responseUser } = user._doc;
      return { user: responseUser };
    }
  } catch (error) {
    console.log(error);
  }
};
// get user by email
exports.getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email: email });
    return user;
  } catch (error) {
    console.log(error);
  }
};
// get user by email
exports.getAllUserServices = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    console.log(error);
  }
};
// get user by email
exports.makeAdminService = async (id) => {
  try {
    // Find the user by their ID and update their role to 'admin'
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { role: "admin" },
      { new: true }
    );

    if (!updatedUser) {
      throw new Error("User not found");
    }

    return updatedUser;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error for handling in your controller
  }
};
