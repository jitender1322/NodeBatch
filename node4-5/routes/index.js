const express = require("express");
const routes = express.Router();
const adminCtl = require("../controllers/adminCtl");
const passport = require("passport");

routes.get("/", adminCtl.login)
routes.get("/dashboard", passport.checkAuthentication, adminCtl.dashboard)
routes.get("/viewAdmin", passport.checkAuthentication, adminCtl.viewAdmin)
routes.get("/addAdmin", passport.checkAuthentication, adminCtl.addAdmin)
routes.get("/profile", passport.checkAuthentication, adminCtl.profile)

routes.post("/insert", adminCtl.addData)
routes.post("/loginInfo", passport.authenticate("local", { failureRedirect: "/" }), adminCtl.loginInfo)

module.exports = routes;