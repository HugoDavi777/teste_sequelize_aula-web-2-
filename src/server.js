const express = require("express");
const controller = require("./controller");
const sequelize = require("./orm-sequelize");

const server = express();
const PORT = 8080;

server.use(express.json());

server.get("/all", controller.getAllDiscovers);
server.get("/discover/:id", controller.findDiscover);
server.post("/discover", controller.createDiscover);
server.delete("/delete/:id", controller.deleteDiscover);
server.put("/update/:id", controller.updateDiscover)

sequelize.sync();

server.listen(PORT, () => console.log("Server ON"));
