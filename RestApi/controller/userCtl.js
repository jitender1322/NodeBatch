let users = require("../model/register")
let bcrypt = require("bcrypt");
let moment = require("moment");
let jwt = require("jsonwebtoken");

module.exports.signUp = async (req, res) => {
    let user = await users.findOne({ email: req.body.email });
    if (user) {
        return res.status(200).json({ msg: "user already registerd" })
    }
    req.body.password = await bcrypt.hash(req.body.password, 10);
    req.body.createdAt = moment().format('MMMM Do YYYY, h:mm:ss a')

    let userData = await users.create(req.body);
    userData ? res.status(200).json({ msg: "user registerd" }) : res.status(400).json({ msg: "something went wrong" })
}

module.exports.checkUser = async (req, res) => {
    let user = await users.findOne({ email: req.body.email });
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            let token = await jwt.sign({ userData: user }, "rnw", { expiresIn: "1h" });
            res.status(200).json({ msg: "password is right", tokenNum: token })
        } else {
            res.status(400).json({ msg: "password is wrong" })
        }
    } else {
        res.status(400).json({ msg: "user not found" })
    }
}