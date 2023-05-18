const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Find all categories with associated products
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: Product
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find category by id with associated products
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: Product
    });
    if (!category) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update category by id
router.put('/:id', async (req, res) => {
  try {
    const upCategory = await Category.findByPk(req.params.id);
    if (!upCategory) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    await upCategory.update(req.body);
    res.status(200).json(upCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete category by id
router.delete('/:id', async (req, res) => {
  try {
    const deCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!deCategory) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(deCategory);
    console.log('Successful!')
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
