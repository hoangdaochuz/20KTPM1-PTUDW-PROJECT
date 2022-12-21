const {getAllProduct,getAllCategory,getProductsByName,getProductsByCategory,getProductsByManufacture, getTotalNumberProducts} = require('../service/productService')
const qs = require('qs')
const paginate = require('express-paginate')

const viewProduct = async(req, res, next)=>{
    const limit = req.query.limit
    const offset = req.offset
    const {searchProduct} = req.query
    const {category} = req.query
    const {manufacture} = req.query
    const {sort, ...withoutSort} = req.query;

    let pageCount = 0

    const totalProducts = await getTotalNumberProducts()
    pageCount = Math.ceil(totalProducts / limit)

    let listProducts = [];
    if(searchProduct){
        listProducts = await getProductsByName(searchProduct, sort, limit, offset)
    }else if(category){
        listProducts = await getProductsByCategory(category, sort, limit, offset)
    }else if(manufacture){
        listProducts = await getProductsByManufacture(manufacture, sort, limit, offset)
    }
    else{
        listProducts = await getAllProduct(sort, limit, offset)
    }
    const listCategory = await getAllCategory()

    res.render('products',{listProducts, listCategory, originalUrl: `${req.baseUrl}?${qs.stringify(withoutSort)}`,
        pageCount, pages: paginate.getArrayPages(req)(3, pageCount,req.query.page), currentPage: req.query.page})
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