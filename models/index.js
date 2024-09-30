// Import the individual models
const User = require('./User');
const Event = require('./event');
const Career = require('./career');
const ShoppingList = require('./shoppingList');
const Vacation = require('./vacation');

// Define associations between models if applicable
User.hasMany(Event, { foreignKey: 'user_id' });
Event.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Career, { foreignKey: 'user_id' });
Career.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(ShoppingList, { foreignKey: 'user_id' });
ShoppingList.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Vacation, { foreignKey: 'user_id' });
Vacation.belongsTo(User, { foreignKey: 'user_id' });

// Export the initialized models and the connection
module.exports = {
  User,
  Event,
  Career,
  ShoppingList,
  Vacation,
};