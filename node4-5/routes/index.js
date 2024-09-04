const express = require("express");
const routes = express.Router();
const adminCtl = require("../controllers/adminCtl")

routes.get("/", adminCtl.login)
routes.get("/dashboard", adminCtl.dashboard)
routes.get("/viewAdmin", adminCtl.viewAdmin)
routes.get("/addAdmin", adminCtl.addAdmin)

routes.post("/insert", adminCtl.addData)

module.exports = routes;