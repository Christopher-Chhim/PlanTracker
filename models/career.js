const sequelize = require ('../config/connection')
const { Model, DataTypes } = require('sequelize');


  class Career extends Model {}

  Career.init({
    jobTitle: {
      type: DataTypes.STRING,
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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user_db',
        key: 'id',
      },
  }, 
  },
  {
    sequelize,
    modelName: 'Career',
  });

module.exports= Career