const express = require('express')
const router = express.Router();
const {getCart, addItemToCart} = require('../../controller/APIController/cartApiController')
router.get('/', getCart);
router.post('/add', addItemToCart)
module.exports = router;
