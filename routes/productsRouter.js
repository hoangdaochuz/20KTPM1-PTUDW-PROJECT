const express = require('express');
const router = express.Router();
const {viewProduct, viewAddProduct, viewEditProduct, editProduct, addProductController} = require('../controller/productsController');
const { upload } = require('../middlewares/uploader');
// router.get('/',viewProduct)
// router.get('/add-product',viewAddProduct)
router.route('/').get(viewProduct)
router.route('/add-product').get(viewAddProduct)
router.route('/add').post(upload.single('image'), addProductController)
// router.get('/edit', viewEditProduct)
// router.post('/edit', editProduct)
router.route('/edit').get(viewEditProduct).post(editProduct)


module.exports = router;