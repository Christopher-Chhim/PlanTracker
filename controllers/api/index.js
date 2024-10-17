const router = require('express').Router();

const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const vacationRoutes = require('./vacationRoutes');
const shoppingListRoutes = require('./shoppingListRoutes');
const careerListRoutes = require('./careerRoutes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/vacations', vacationRoutes);
router.use('/shopping', shoppingListRoutes);
router.use('/career', careerListRoutes);


module.exports = router;
