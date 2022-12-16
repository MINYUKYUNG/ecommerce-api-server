const db = require('../models');
const { products } = db;

const getAllProducts = async (req, res) => {
  const { sort } = req.query;
  const orderBy = sort === 'desc' ? 'DESC' : 'ASC';

  const productLists = await products.findAll({
    attributes: [
      'id',
      'title',
      'price',
      'description',
      'category',
      'image',
      'rate',
      'count',
    ],
    order: [
      ['id', orderBy]
    ],
  });
  
  const result = productLists.map(product => {
    const { id, title, price, description, category, image, rate, count } = product;
    return {
      id, title, price, description, category, image, rating: { rate, count },
    };
  });

  res.send(result);
};

const getProduct = async (req, res) => {
  const { productId } = req.params;

  const product = await products.findOne({
    attributes: [
      'id',
      'title',
      'price',
      'description',
      'category',
      'image',
      'rate',
      'count',
    ],
    where: {
      id: productId,
    },
  });

  if (product) {
    const { id, title, price, description, category, image, rate, count } = product;
    const result = {
      id, title, price, description, category, image, rating: { rate, count },
    };
    res.send(result);
  } else res.status(404).send('');
};

const getCategoryProducts = async (req, res) => {
  const { categoryName } = req.params;
  const { sort } = req.query;
  const orderBy = sort === 'desc' ? 'DESC' : 'ASC';

  const productLists = await products.findAll({
    attributes: [
      'id',
      'title',
      'price',
      'description',
      'category',
      'image',
      'rate',
      'count',
    ],
    where: {
      category: categoryName,
    },
    order: [
      ['id', orderBy]
    ],
  });

  if (productLists.length) {
    const result = productLists.map(product => {
      const { id, title, price, description, category, image, rate, count } = product;
      return {
        id, title, price, description, category, image, rating: { rate, count },
      };
    });
    res.send(result);
  } else res.status(404).send('');
};

module.exports = {
  getAllProducts,
  getProduct,
  getCategoryProducts,
};
