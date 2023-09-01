const express = require("express");
const { userSignUp } = require("../controllers/user/userSignUp");
const { userLogin } = require("../controllers/user/userLogin");
const { getAllUserController } = require("../controllers/user/getAllUsers");
const { makeAdminController } = require("../controllers/user/makeAdmin");

const router = express.Router();

router.post("/signup", userSignUp);
router.post("/makeadmin", makeAdminController);
router.post("/login", userLogin);
router.get("/", getAllUserController);

module.exports = router;
