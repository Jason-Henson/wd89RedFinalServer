const { DataTypes } = require("sequelize"); 
const db = require("../db");

const Meds = db.define("meds", {
    medFor: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },

    medName: {
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: false,
    }, 

    medScript: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: false,
    }, 

    medDesc: {
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: false,
    },

    medActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: false,
    },

    medNotes: {
        type: DataTypes.STRING,
        allowNull: true, 
        unique: false,
    },
});

module.exports = Meds; 