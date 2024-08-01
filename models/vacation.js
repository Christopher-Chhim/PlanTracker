const sequelize = require ('../config/connection')
const { Model, DataTypes } = require('sequelize');

  class Vacation extends Model {}

  Vacation.init({
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Vacation',
  });


  module.exports = Vacation
