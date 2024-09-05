const admin = require("../model/adminSchema")

module.exports.login = (req, res) => {
    res.render("login")
}
module.exports.dashboard = (req, res) => {
    res.render("dashboard")
}
module.exports.viewAdmin = async (req, res) => {
    let data = await admin.find({});
    data ? res.render("viewAdmin", { data }) : console.log("something went wrong");
}
module.exports.addAdmin = (req, res) => {
    res.render("addAdmin")
}

module.exports.addData = async (req, res) => {
    let data = await admin.create(req.body);
    data ? res.redirect("back") : console.log("data not submitted");
}

module.exports.loginInfo = (req, res) => {
    res.render("dashboard")
}
module.exports.profile = (req, res) => {
    res.render("profile")
}