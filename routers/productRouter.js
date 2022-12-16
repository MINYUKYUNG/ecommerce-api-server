const productController = require('../controllers/productController');
const {
  getAllProducts,
  getProduct,
  getCategoryProducts,
} = productController;
const router = require('express').Router();

router.get('/', getAllProducts);
router.get('/:productId', getProduct);
router.get('/category/:categoryName', getCategoryProducts);

module.exports = router;
