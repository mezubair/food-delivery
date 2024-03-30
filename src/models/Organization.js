const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Organization = sequelize.define('Organization', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{tableName:'organization',timestamps: false});

module.exports = Organization;
