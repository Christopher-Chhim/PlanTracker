
const router = require('express').Router();
const User = require('./models/User');
const withAuth = require('../utils/auth');
// have no idea why i used bcrypt:)
const bcrypt = require('bcrypt');
const session = require('express-session');

// POST route for user login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!userData) {
      res.status(400).json({ message: 'No user with that username!' });
      return;
    }

    const validPassword = await bcrypt.compare(req.body.password, userData.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST route for user signup
router.post('/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await User.create({
      username: req.body.username,
      password: hashedPassword,
    });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.username = newUser.username;
      req.session.logged_in = true;

      res.json({ user: newUser, message: 'You are now signed up and logged in!' });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST route for user logout
router.post('/logout', withAuth, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.status(204).end();
  });
});

module.exports = router;
