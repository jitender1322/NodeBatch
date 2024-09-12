const adminSchema = require("../model/adminSchema")

module.exports.getDetails = async (req, res) => {
    let data = await adminSchema.find({});
    data ? res.status(200).json({ msg: "response found", adminData: data }) : res.status(400).json({ msg: "data not found" })
}
module.exports.addData = async (req, res) => {
    let data = await adminSchema.create(req.body)
    data ? res.status(200).json({ msg: "data submitted" }) : res.status(400).json({ msg: "data not submitted" })
}
module.exports.deleteData = async (req, res) => {
    let data = await adminSchema.findByIdAndDelete(req.params.id)
    data ? res.status(200).json({ msg: "data deleted" }) : res.status(400).json({ msg: "data not deleted" })
}
module.exports.updateData = async (req, res) => {
    let data = await adminSchema.findByIdAndUpdate(req.params.id, {

    })
    data ? res.status(200).json({ msg: "data updated" }) : res.status(400).json({ msg: "data not updated" })
}