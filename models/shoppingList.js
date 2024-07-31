const sequelize = require ('../config/connection')
const { Model, DataTypes } = require('sequelize');

  class ShoppingList extends Model {}

  ShoppingList.init({
    item: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    purchased: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'ShoppingList',
  });

module.exports= ShoppingList