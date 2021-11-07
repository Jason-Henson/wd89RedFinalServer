const { DataTypes } = require("sequelize"); 
const db = require("../db");

const Appointment = db.define("appointment", {
    appFor: {
        type: DataTypes.STRING,
        allowNull: false, 
    },

    appDate: {
        type: DataTypes.DATE, 
        allowNull: false,
        unique: false,
    },

    appTime: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    }, 

    appLoc: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false, 
    },

    appDoc: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },

    appNotes: {
        type: DataTypes.STRING,
        allowNull: true, 
        unique: false,
    },
});

module.exports = Appointment;