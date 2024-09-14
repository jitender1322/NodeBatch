const express = require("express");
const facultyRoutes = express.Router();
const facultyCtl = require("../controller/facultyCtl")

const multer = require("multer");

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now());
    }
})

const upload = multer({ storage: Storage }).single("image");

facultyRoutes.get("/", facultyCtl.getDetails)
facultyRoutes.post("/addDetails", upload, facultyCtl.addDetails)
facultyRoutes.delete("/deleteFacultyData/:id", facultyCtl.deleteFacultyData)

module.exports = facultyRoutes