const express = require("express");
const { userSignUp } = require("../controllers/user/userSignUp");
const { userLogin } = require("../controllers/user/userLogin");
const { getAllUserController } = require("../controllers/user/getAllUsers");

const router = express.Router();

router.post("/signup", userSignUp);
router.post("/login", userLogin);
router.get("/", getAllUserController);

module.exports = router;
