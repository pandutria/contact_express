const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Gender = sequelize.define('Gender', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'gender',
    timestamps: false
});

module.exports = Gender;
