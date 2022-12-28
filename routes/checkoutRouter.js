const express = require('express')
const checkoutRouter = express.Router()
const {showCheckout, showThankYou} = require('../controller/checkoutController');
checkoutRouter.get('/', showCheckout)
checkoutRouter.get('/success', showThankYou)

module.exports = {checkoutRouter}
