const {getAllProducts, getSaleProducts,getSpecificProductById,getRelatedProduct,getProductsByName,getProductsByCategory,getProductsByManufacture, getTotalNumberOfProduct, getReviewOfProduct, getTotalReviewOfProduct} = require('../../services/productService')
const qs = require('qs')
const paginate = require('express-paginate')
const db = require('../../db')

const services = ('../db/services.js')
const Paginator = require('paginator');


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

const addReview = async(req, res, next)=>{
  const  {id_product,id_user,message} = req.body
  const result = await db.connection.execute('INSERT INTO review(id_product, id_user, content) values(?,?,?)',[id_product, id_user, `${message}`])
  res.status(200).json({result})
}

const getReviews = async(req, res, next)=>{
  const {page, id_product} = req.query
  if (isNaN(page) || !Number.isInteger(parseFloat(page)) || page < 1) {
    page = 1;
  }

  const listReview = await getReviewOfProduct(id_product, parseInt(page))
  const totalReview = await getTotalReviewOfProduct(id_product);
  console.log(totalReview)
  const paginator = new Paginator(3, 2);
  res.status(200).json({
    listReview,
    paging: paginator.build(parseInt(totalReview), page)
  })

}
module.exports = {
  getListProduct,
  addReview,
  getReviews,
}