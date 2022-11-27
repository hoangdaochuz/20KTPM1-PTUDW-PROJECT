const express = require('express');
const router = express.Router();
const {viewProduct, viewAddProduct, viewEditProduct, editProduct} = require('../controller/productsController')
router.get('/',viewProduct)
router.get('/add-product',viewAddProduct)
router.get('/edit', viewEditProduct)
router.post('/edit', editProduct)

module.exports = router;