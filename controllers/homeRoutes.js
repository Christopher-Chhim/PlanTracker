const router = require('express').Router();
<<<<<<< HEAD
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const projectData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      projects, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
=======
const { User, Event, Career, ShoppingList, Vacation } = require('../models');
const withAuth = require('../utils/auth');


// Home route
router.get('/', withAuth, async (req, res) => {
  try {
    res.render('home', {
      logged_in: req.session.logged_in,
>>>>>>> main
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

<<<<<<< HEAD
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

=======
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

>>>>>>> main
module.exports = router;
