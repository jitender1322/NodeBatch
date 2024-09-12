const express = require("express");
const port = 9001;

const app = express();
const db = require("./config/database")


app.use(express.urlencoded())
app.use("/", require("./routes"));


app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on port" + port);
})