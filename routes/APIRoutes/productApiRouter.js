const express = require('express')
const productApiRouter = express.Router();

const {getListProduct} = require('../../controller/APIController/productApiController')

productApiRouter.get('/',getListProduct);

module.exports = productApiRouter;