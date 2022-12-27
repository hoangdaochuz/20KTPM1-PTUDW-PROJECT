const {getAllProducts, getSaleProducts,getSpecificProductById,getRelatedProduct,getProductsByName,getProductsByCategory,getProductsByManufacture, getTotalNumberOfProduct} = require('../../services/productService')
const qs = require('qs')
const paginate = require('express-paginate')

const services = ('../db/services.js')



const getListProduct = async(req, res, next)=>{
  const limit = req.query.limit || 5
  const offset = req.offset
  let pageCount = 0;
  const {nameProduct} = req.query;
  const {category} = req.query
  const {sort, ...withoutSort} = req.query;
  const {manufacture} = req.query;
  const {minPrice, maxPrice} = req.query;
  let listProducts = [];
  const totalProduct = await getTotalNumberOfProduct();
  pageCount = Math.ceil(totalProduct / limit)
  if(nameProduct){
      listProducts = await getProductsByName(nameProduct, sort, minPrice, maxPrice, limit, offset)
  }else if(category){
      listProducts = await getProductsByCategory(category, sort, minPrice, maxPrice, limit, offset)
  }
  else if(manufacture) {
      listProducts = await getProductsByManufacture(manufacture, sort, minPrice, maxPrice, limit, offset)
  } 
  else {
      const results = await getAllProducts(sort, minPrice, maxPrice, limit, offset)
      listProducts = results[0]
  }
  

  const saleProducts = await getSaleProducts();
  res.json({listProducts})

}
module.exports = {
  getListProduct,
}