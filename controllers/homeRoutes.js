const router = require('express').Router();
const { User, Event, Career, ShoppingList, Vacation } = require('../models/User');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('home', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/register', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('register');
});

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

// Similarly, create routes for careers, shopping, and vacations.

module.exports = router;
