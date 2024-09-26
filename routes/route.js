const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");
const limitter = require('../common/limitters');


// routes
router.post("/api/login",limitter.loginLimitter, userController.login);
router.post("/api/signup",limitter.signupLimitter, userController.signup);

module.exports = router;
