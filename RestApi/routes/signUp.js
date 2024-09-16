const express = require("express");
const signUpRoutes = express.Router();
const userCtl = require("../controller/userCtl");

signUpRoutes.post("/addUser", userCtl.signUp)
signUpRoutes.post("/checkUser", userCtl.checkUser)

module.exports = signUpRoutes;