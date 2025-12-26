const userModel = require('./userModel');
const bookingModel = require('./bookingModel');
const busModel = require('./busModel');

userModel.hasMany(bookingModel, { foreignKey: 'userId' });
bookingModel.belongsTo(userModel, { foreignKey: 'userId' });

busModel.hasMany(bookingModel, { foreignKey: 'busId' });
bookingModel.belongsTo(busModel, { foreignKey: 'busId' });

module.exports = {
  userModel,
  bookingModel,
  busModel
};
