const sequelize = require ('../config/connection');
const { Model, DataTypes } = require('sequelize');


  class Career extends Model {}

  Career.init({
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    endDate: {
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Career',
    timestamps: true,
  });

module.exports= Career