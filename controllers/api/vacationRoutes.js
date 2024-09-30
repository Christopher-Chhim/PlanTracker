const router = require('express').Router();
const { Vacation } = require('../../models');
const withAuth = require('../../utils/auth');


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

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const vacationData = await Vacation.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!vacationData) {
      res.status(404).json({ message: 'No vacation found with this id!' });
      return;
    }

    res.status(200).json(vacationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;