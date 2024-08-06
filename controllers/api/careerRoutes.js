const router = require('express').Router();
const { Career } = require('../../models');
const withAuth = require('../../utils/auth');

// Route to create a new career
router.post('/', withAuth, async (req, res) => {
  try {
    const newCareer = await Career.create({
      ...req.body,
      user_id: req.session.user_id, // Associate career with the logged-in user
    });
    res.status(200).json(newCareer);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to get all careers associated with the logged-in user
router.get('/', withAuth, async (req, res) => {
  try {
    const careerData = await Career.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    res.status(200).json(careerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;