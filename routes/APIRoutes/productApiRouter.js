const express = require('express')
const productApiRouter = express.Router();

const {getListProduct, addReview, getReviews} = require('../../controller/APIController/productApiController')

productApiRouter.get('/',getListProduct);
productApiRouter.post('/add-review', addReview);
productApiRouter.get('/get-review', getReviews);

module.exports = productApiRouter;