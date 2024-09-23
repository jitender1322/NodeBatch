const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    let token = req.header("Authorization");
    let newToken = token.slice(7, token.length)
    if (!token) {
        res.status(400).json({ msg: "token not found" })
    }
    let decode = jwt.verify(newToken, "rnw");
    console.log(decode);
    req.user = decode
    next();
}

module.exports = auth