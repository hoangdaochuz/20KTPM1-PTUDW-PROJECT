const express = require('express')
const checkoutRouter = express.Router()
const {showCheckout} = require('../controller/checkoutController');
checkoutRouter.get('/', showCheckout)

module.exports = {checkoutRouter}
