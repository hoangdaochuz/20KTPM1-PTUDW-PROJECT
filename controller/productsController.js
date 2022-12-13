const {getAllProduct,getAllCategory,getProductsByName,getProductsByCategory,getProductsByManufacture} = require('../service/productService')
const qs = require('qs')
const viewProduct = async(req, res, next)=>{
    const {searchProduct} = req.query
    const {category} = req.query
    const {manufacture} = req.query
    const {sort, ...withoutSort} = req.query;

    let listProducts = [];
    if(searchProduct){
        listProducts = await getProductsByName(searchProduct, sort)
    }else if(category){
        listProducts = await getProductsByCategory(category, sort)
    }else if(manufacture){
        listProducts = await getProductsByManufacture(manufacture, sort)
    }
    else{
        listProducts = await getAllProduct(sort)
    }
    const listCategory = await getAllCategory()

    res.render('products',{listProducts, listCategory, originalUrl: `${req.baseUrl}?${qs.stringify(withoutSort)}`})
}

const viewAddProduct = (req, res, next)=>{
    const data = req.body;
    res.render('addProductForm');
}
const viewEditProduct = (req, res, next)=>{
    res.render('editProductForm');
}

const editProduct = (req, res, next)=>{
    res.redirect('/products');
}
module.exports = {viewProduct, viewAddProduct, viewEditProduct,editProduct}