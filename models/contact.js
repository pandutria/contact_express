const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Gender = require('./gender');

const Contact = sequelize.define('Contact', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomor_telepon: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genderId: {
        type: DataTypes.INTEGER,
        references: {
            model: Gender,
            key: 'id'
        }
    }
}, {
    tableName: 'contact',
    timestamps: false
});

Contact.belongsTo(Gender, { foreignKey: 'genderId' });

module.exports = Contact;
