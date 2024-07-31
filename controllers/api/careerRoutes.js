const { Career } = require('../models');

exports.getAllCareers = async (req, res) => {
  try {
    const careers = await Career.findAll();
    res.render('careers/index', { careers });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createCareer = async (req, res) => {
  try {
    const { jobTitle, company, startDate, endDate } = req.body;
    await Career.create({ jobTitle, company, startDate, endDate });
    res.redirect('/careers');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
