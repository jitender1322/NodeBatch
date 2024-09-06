const admin = require("../model/adminSchema")

module.exports.login = (req, res) => {
    res.render("login")
}
module.exports.logout = (req, res) => {
    req.session.destroy((err) => {
        err ? console.log(err) : res.redirect("/")
    })
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
module.exports.changePass = (req, res) => {
    res.render("changePass")
}
module.exports.changePassword = async (req, res) => {
    let oldPass = req.user.password;
    let id = req.user.id;

    if (oldPass == req.body.oldPass) {

        if (req.body.oldPass != req.body.newPass) {

            if (req.body.newPass == req.body.confirmPass) {
                console.log(id);
                let adminData = await admin.findByIdAndUpdate(id, { password: req.body.newpass })
                adminData ? res.redirect("/logout") : console.log("something went wrong");
            } else {
                console.log("new password and confirm password are different");
            }

        } else {
            console.log("old password and new password must be different");
        }

    } else {
        console.log("old password is wrong");
    }
}