const router = require('express').Router();
const productController = require('../controllers/productController');
const {
  getAllProducts,
  getProduct,
  getCategoryProducts,
} = productController;

router.get('/', getAllProducts);
router.get('/:productId', getProduct);
router.get('/category/:categoryName', getCategoryProducts);

module.exports = router;
