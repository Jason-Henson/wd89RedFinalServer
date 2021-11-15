const { DataTypes } = require("sequelize");
const db = require("../db");
// Example UserTable Build this out Need more columns add it here
const User = db.define("user", {
  userName: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },

  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },

  role: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    unique: false,
  },
  
  passwordhash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
