const express = require("express");
const port = 1008;
const path = require("path")

const app = express();
const db = require("./config/database")

app.set("view engine", "ejs");
app.use("/", express.static(path.join(__dirname, "public")))
app.use(express.urlencoded());

app.use("/", require("./routes"));

app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on port" + port);
})