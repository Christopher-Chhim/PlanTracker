const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const careerRoutes = require('./careerRoutes');
const shoppingListRoutes = require('./shoppingListRoutes');
const vacationRoutes = require('./vacationRoutes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/careers', careerRoutes);
router.use('/shopping-list', shoppingListRoutes);
router.use('/vacations', vacationRoutes);

module.exports = router;
