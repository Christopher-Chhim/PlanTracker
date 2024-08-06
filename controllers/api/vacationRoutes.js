const router = require('express').Router();
const { Vacation } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new vacation entry
router.post('/', withAuth, async (req, res) => {
  try {
    const newVacation = await Vacation.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newVacation);
  } catch (err) {
    
    res.status(400).json(err);
  }
});

// Get all vacation entries for the logged-in user
router.get('/', withAuth, async (req, res) => {
  try {
    const vacationData = await Vacation.findAll({
      where: { user_id: req.session.user_id },
    });
    res.status(200).json(vacationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;