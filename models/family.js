const { DataTypes } = require("sequelize"); 
const db = require("../db");

const Family = db.define("family", {
    famMember: {
        type: DataTypes.STRING(25),
        allowNull: false,
        unique: false,
    },

    famAge: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,   
    }, 

    famAllergic: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: false,
    },

});

module.exports = Family;