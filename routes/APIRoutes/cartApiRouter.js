const express = require('express')
const router = express.Router();
const {getCart, addItemToCart, decreaseItemOfCart} = require('../../controller/APIController/cartApiController')
router.get('/', getCart);
router.post('/add', addItemToCart)
router.post('/decrease', decreaseItemOfCart)
module.exports = router;
