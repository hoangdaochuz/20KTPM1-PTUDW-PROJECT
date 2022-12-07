const {getAllProducts, getSaleProducts,getSpecificProductById,getRelatedProduct,getProductsByName,getProductsByCategory,getProductsByManufacture} = require('../services/productService')
const qs = require('qs')
const getListProduct = async(req, res, next)=>{
    const {nameProduct} = req.query;
    const {category} = req.query
    const {sort, ...withoutSort} = req.query;
    const {manufacture} = req.query;
    const {minPrice, maxPrice} = req.query;
    let listProducts = [];

    if(nameProduct){
        listProducts = await getProductsByName(nameProduct, sort, minPrice, maxPrice)
    }else if(category){
        listProducts = await getProductsByCategory(category, sort, minPrice, maxPrice)
    }
    else if(manufacture) {
        listProducts = await getProductsByManufacture(manufacture, sort, minPrice, maxPrice)
    } 
    else {
        listProducts = await getAllProducts(sort, minPrice, maxPrice)
    }
    

    const saleProducts = await getSaleProducts();
    res.render('products',{listProducts, saleProducts, originalUrl: `${req.baseUrl}?${qs.stringify(withoutSort)}`})

}
const showDetail = async(req, res, next)=>{
     const id = req.params.id;
     const productItem = await getSpecificProductById(id)
     const relatedProducts = await getRelatedProduct(id)
     res.render('productDetail', {productItem,relatedProducts});
 }

module.exports = {getListProduct, showDetail}