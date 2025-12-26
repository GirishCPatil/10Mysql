const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Payment = sequelize.define('Payment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  amountPaid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  paymentStatus: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  tableName: 'payments',
  timestamps: false
});

module.exports = Payment;
