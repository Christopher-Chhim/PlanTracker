const router = require('express').Router();

const apiRoutes = require('./api/userRoutes');
const apiRoutesEvents = require('./api/events');
const apiRoutesShoppingList = require('./api/shoppingListRoutes');
const apiRoutesCareers = require('./api/careerRoutes');
const apiRoutesVacation = require('./api/vacationRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/api/event', apiRoutesEvents );
router.use('/api/shoppingList', apiRoutesShoppingList );
router.use('/api/career',  apiRoutesCareers);
router.use('/api/vacation',  apiRoutesVacation);

module.exports = router;