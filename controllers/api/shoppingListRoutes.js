const router = require('express').Router();
const { ShoppingList } = require('../../models');
const withAuth = require('../../utils/auth');

// Route to create a new shopping list item
router.post('/', withAuth, async (req, res) => {
  try {
    const newShoppingListItem = await ShoppingList.create({
      ...req.body,
      
      user_id: req.session.user_id, // Associate shopping list item with the logged-in user
    });
    res.status(200).json(newShoppingListItem);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to get all shopping list items associated with the logged-in user
router.get('/', withAuth, async (req, res) => {
  try {
    const shoppingListData = await ShoppingList.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    res.status(200).json(shoppingListData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;