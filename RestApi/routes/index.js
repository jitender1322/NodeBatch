const express = require("express");
const routes = express.Router();

const adminCtl = require("../controller/adminCtl");

routes.get("/", adminCtl.getDetails)
routes.post("/addData", adminCtl.addData)
routes.delete("/deleteData/:id", adminCtl.deleteData)
routes.put("/updateData/:id", adminCtl.updateData)


module.exports = routes