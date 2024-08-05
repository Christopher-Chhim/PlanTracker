const router = require('express').Router();

const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const vacationRoutes = require('./vacationRoutes');
const shoppingListRoutes = require('./shoppingListRoutes');
const careerListRoutes = require('./careerListRoutes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/vacation', vacationRoutes);
router.use('/shoppingList', shoppingListRoutes);
router.use('/careerList', careerListRoutes);


module.exports = router;
