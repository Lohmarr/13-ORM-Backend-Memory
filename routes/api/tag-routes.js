const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', (req, res) => {
  Tag.findAll({ 
    // include product data
    include: [ 
      { model: Product,  through: ProductTag, }
    ],
  })
  .then((tagData) => res.json(tagData))
  .catch((err) => res.status(400).json(err));
});

// Find tag by id with product data
router.get('/:id', async (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    // include product data
    include: [ 
    { model: Product,  through: ProductTag, }
    ],
  })
  .then((tagData) => res.json(tagData))
  .catch((err) => res.status(400).json(err));
});

// Create new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update tag by id
router.put('/:id', async (req, res) => {
  try {
    const upTag = await Tag.findByPk(req.params.id);
    if (!upTag) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    await upTag.update(req.body);
    res.status(200).json(upTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete tag by id
router.delete('/:id', async (req, res) => {
  try {
    const deTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!deTag) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(deTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
