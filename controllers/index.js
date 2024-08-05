const router = require('express').Router();

<<<<<<< HEAD
const apiRoutes = require('./api');
=======
const apiRoutes = require('./api/userRoutes');
>>>>>>> main
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
