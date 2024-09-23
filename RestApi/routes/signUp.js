const express = require("express");
const signUpRoutes = express.Router();
const userCtl = require("../controller/userCtl");

const auth = require("../config/userAuth")

signUpRoutes.get("/viewUser", auth, userCtl.viewUser)
signUpRoutes.post("/addUser", userCtl.signUp)
signUpRoutes.post("/checkUser", userCtl.checkUser)

module.exports = signUpRoutes;