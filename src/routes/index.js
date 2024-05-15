const express = require("express");
const Router = express.Router();

const data = require("./data");

Router.use("/crud", data);

Router.get("/", (req, res) => {
    res.send("Server untuk materi sudah online!");
});

module.exports = Router;