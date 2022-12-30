const { 
    getAllProduct,
    getAllCategory,
    getProductsByName,
    getProductsByCategory,
    getProductsByManufacture,
    getTotalNumberProducts,
    addProductService} = require('../service/productService')
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

const addProductController = async (req,res)=>{
    const {name, price, description, category, manufacture, create_at, status} = req.body
    console.log('product controller name', name)
    const image = req.file.path
    console.log(image)
    const result = await addProductService(name, price, description, category, manufacture, create_at, image, status);
    if(result){
        res.status(200).json({status: "success"})
    }else{
        res.status(400).json({status: "error"})
    }
}
module.exports = {viewProduct, viewAddProduct, viewEditProduct,editProduct, addProductController}