const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

const apiRoutesEvents = require('./api/eventRoutes'); 
const apiRoutesShoppingList = require('./api/shoppingListRoutes'); 
const apiRoutesCareers = require('./api/careerRoutes'); 
const apiRoutesVacation = require('./api/vacationRoutes'); 

router.use('/api/event', apiRoutesEvents );
router.use('/api/shopping', apiRoutesShoppingList );
router.use('/api/career',  apiRoutesCareers);
router.use('/api/vacation',  apiRoutesVacation);


module.exports = router;