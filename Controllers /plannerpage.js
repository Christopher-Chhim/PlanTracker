
const router = require('express').Router();
const { Plan } = require('./models');
const withAuth = require('./utils/auth');

// GET ending and it's gonnarender all plans for the the user who already loged in
router.get('/', withAuth, async (req, res) => {
  try {
    const plans = await Plan.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    res.json(plans); 
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST emethod and  to create a new plan
router.post('/plans', withAuth, async (req, res) => {
  try {
    const newPlan = await Plan.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPlan);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE route to remove a plan
router.delete('/plans/:id', withAuth, async (req, res) => {
  try {
    const plan = await Plan.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!plan) {
      res.status(404).json({ message: 'No plan found with this id!' });
      return;
    }
    res.status(200).json(plan);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
