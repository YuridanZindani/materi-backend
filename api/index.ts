const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const router = require("../src/routes/index.js");

const app = express();

const server = require("http").Server(app);

require("../db.connect.js")();
 
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(helmet.hidePoweredBy({ setTo: "PHP 7.4.11" }));

app.use("/", router);

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;