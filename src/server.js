const express = require("express");
const controller = require("./controller");
const sequelize = require("./orm-sequelize");

const server = express();
const PORT = 8080;

server.get("/all", controller.getAllScientists);
server.get("/discover",controller.createDiscover)

sequelize.sync();

server.listen(PORT, () => console.log("Server ON"));
