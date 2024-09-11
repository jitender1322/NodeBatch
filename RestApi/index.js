const express = require("express");
const port = 9001;

const app = express();

app.get("/", (req, res) => {
    console.log("hello rest api");
    res.status(200).json({ msg: "response getted" })
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on port" + port);
})