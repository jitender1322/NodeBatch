const faculty = require("../model/facultySchema")
const bcrypt = require("bcrypt");
const moment = require("moment");
const fs = require("fs");

module.exports.getDetails = async (req, res) => {
    let data = await faculty.find({});
    data ? res.status(200).json({ msg: "response found", facultyData: data }) : res.status(400).json({ msg: "data not found" })
}
module.exports.addDetails = async (req, res) => {
    req.body.image = req.file.path
    req.body.password = await bcrypt.hash(req.body.password, 10);
    req.body.createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');
    let adminData = await faculty.create(req.body);
    res.status(200).json({ msg: "data submitted" })
}
module.exports.deleteFacultyData = async (req, res) => {
    console.log(req.params.id);
    let singleData = await faculty.findById(req.params.id);
    console.log(singleData);

    fs.unlinkSync(singleData.image);
    let data = await faculty.findByIdAndDelete(req.params.id)
    data ? res.status(200).json({ msg: "data deleted" }) : res.status(400).json({ msg: "faculty data not deleted" })
}