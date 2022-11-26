const express = require('express')
const shoppingCartRouter = express.Router()
const {showCart} = require('../controller/shoppingCartController');
shoppingCartRouter.get('/', showCart)

module.exports = {shoppingCartRouter}
