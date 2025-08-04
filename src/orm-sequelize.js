const {Sequelize} = require("sequelize")

const sequelize = new Sequelize({
    username:"postgres",
    password:"123",
    database:"science",
    host:"localhost",
    dialect:"postgres"
});

module.exports= sequelize