const express = require("express");
const router = express.Router();
const { signup, signin, signout } = require("../controller/authentication");
const validateSignup = require("../validators/signup.validation");
const validateSignin = require("../validators/signin.validation");

router.post("/signup", validateSignup, signup);
router.post("/signin", validateSignin, signin);
router.post("/signout", signout);

module.exports = router;
