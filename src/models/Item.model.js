const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  type: {
    type: DataTypes.ENUM('perishable','non-perishable'),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
},{tableName:'item',timestamps: false});

module.exports = Item;
