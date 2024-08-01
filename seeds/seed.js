const sequelize = require('../config/connection'); // Adjust the path if needed
const { User, Project, Event, Career, ShoppingList, Vacation } = require('../models'); // Add all your models here


// Import the JSON data or define the seed data here
const userData = require('./userData.json');
const eventData = require('./eventData.json');
const careerData = require('./careerData.json');
const shoppingListData = require('./shoppingListData.json');
const vacationData = require('./vacationData.json');


const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Drops and recreates the database tables based on your models
    
    // Seed users
    const users = await User.bulkCreate(userData, {
      individualHooks: true, // For hashing passwords
      returning: true,
    });
    // Seed events
    for (const event of eventData) {
      await Event.create({
        ...event,
        user_id: users[Math.floor(Math.random() * users.length)].id, // Randomly assign user_id
      });
    }

    // Seed careers
    for (const career of careerData) {
      await Career.create({
        ...career,
        user_id: users[Math.floor(Math.random() * users.length)].id, // Randomly assign user_id
      });
    }

    // Seed shopping lists
    for (const item of shoppingListData) {
      await ShoppingList.create({
        ...item,
        user_id: users[Math.floor(Math.random() * users.length)].id, // Randomly assign user_id
      });
    }

    // Seed vacations
    for (const vacation of vacationData) {
      await Vacation.create({
        ...vacation,
        user_id: users[Math.floor(Math.random() * users.length)].id, // Randomly assign user_id
      });
    }

    console.log('Database seeded successfully!');
    process.exit(0); // Exit the process

  } catch (err) {
    console.error('Failed to seed database:', err);
    process.exit(1); // Exit the process with failure code
  }
};

seedDatabase();

    
    

