const router = require('express').Router();
const { User, Event, Career, ShoppingList, Vacation } = require('../models');
const withAuth = require('../utils/auth');


// Home route
router.get('/', withAuth, async (req, res) => {
  try {
    res.render('home', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// // Logout route
router.get('/logout', (req, res) => {
  res.redirect('login');
});

// Register route
router.get('/register', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('register');
});


// User profile route
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id);
    if (!userData) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    
    const user = userData.get({ plain: true });
    
    res.render('profile', {
      user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Events route
router.get('/events', withAuth, async (req, res) => {
  try {
    const eventData = await Event.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const events = eventData.map((event) => event.get({ plain: true }));

    res.render('events', {
      events,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Careers route
router.get('/career', withAuth, async (req, res) => {
  try {
    const careerData = await Career.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const careers = careerData.map((career) => career.get({ plain: true }));

    res.render('career', {
      careers,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Shopping Lists route
router.get('/shoppingList', withAuth, async (req, res) => {
  try {
    const shoppingListData = await ShoppingList.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const shoppingLists = shoppingListData.map((list) => list.get({ plain: true }));

    res.render('shopping', {
      shoppingLists,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Vacations route
router.get('/vacations', withAuth, async (req, res) => {
  try {
    const vacationData = await Vacation.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const vacations = vacationData.map((vacation) => vacation.get({ plain: true }));

    res.render('vacations', {
      vacations,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
