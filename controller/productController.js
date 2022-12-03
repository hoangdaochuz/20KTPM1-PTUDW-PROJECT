const {getAllProducts, getSaleProducts,getSpecificProductById,getRelatedProduct,getProductsByName,getProductsByCategory} = require('../services/productService')
const qs = require('qs')
const getListProduct = async(req, res, next)=>{
    const {nameProduct} = req.query;
    const {category} = req.query
    const {sort, ...withoutSort} = req.query;
    let listProducts = [];
    if(nameProduct){
        listProducts = await getProductsByName(nameProduct)
    }else if(category){
        listProducts = await getProductsByCategory(category)
    }else{

        listProducts = await getAllProducts();
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