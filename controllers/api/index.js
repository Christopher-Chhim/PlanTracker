const router = require('express').Router();
<<<<<<< HEAD
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;

=======

const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const vacationRoutes = require('./vacationRoutes');
const shoppingListRoutes = require('./shoppingListRoutes');
const careerListRoutes = require('./careerRoutes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/vacations', vacationRoutes);
router.use('/shoppingList', shoppingListRoutes);
router.use('/career', careerListRoutes);


module.exports = router;
>>>>>>> main
