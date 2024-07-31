const { ShoppingList } = require('../models');

exports.getAllShoppingLists = async (req, res) => {
  try {
    const shoppingLists = await ShoppingList.findAll();
    res.render('shoppingLists/index', { shoppingLists });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createShoppingList = async (req, res) => {
  try {
    const { item, quantity } = req.body;
    await ShoppingList.create({ item, quantity });
    res.redirect('/shopping-lists');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
