const { DataTypes } = require("sequelize");
const sequelize = require("../orm-sequelize");

const discovers = sequelize.define("discovers", {
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
});

module.exports = discovers;
