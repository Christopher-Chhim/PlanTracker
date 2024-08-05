<<<<<<< HEAD
const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
=======
const router = require("express").Router();
const { User } = require("../../models");

router.post("/users/register", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    console.log(userData);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
>>>>>>> main
    res.status(400).json(err);
  }
});

<<<<<<< HEAD
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
=======
router.post("/users/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
>>>>>>> main

    if (!userData) {
      res
        .status(400)
<<<<<<< HEAD
        .json({ message: 'Incorrect email or password, please try again' });
=======
        .json({ message: "Incorrect username or password, please try again" });
>>>>>>> main
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
<<<<<<< HEAD
        .json({ message: 'Incorrect email or password, please try again' });
=======
        .json({ message: "Incorrect username or password, please try again" });
>>>>>>> main
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
<<<<<<< HEAD
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

=======
      res.json({ user: userData, message: "You are now logged in!" });
    });
>>>>>>> main
  } catch (err) {
    res.status(400).json(err);
  }
});

<<<<<<< HEAD
router.post('/logout', (req, res) => {
=======
router.post("/logout", (req, res) => {
>>>>>>> main
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
