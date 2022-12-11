const {getAllProduct,getAllCategory,getProductsByName,getProductsByCategory,getProductsByManufacture} = require('../service/productService')

const viewProduct = async(req, res, next)=>{
    const {searchProduct} = req.query
    const {category} = req.query
    const {manufacture} = req.query

    let listProducts = [];
    if(searchProduct){
        listProducts = await getProductsByName(searchProduct)
    }else if(category){
        listProducts = await getProductsByCategory(category)
    }else if(manufacture){
        console.log(manufacture)
        listProducts = await getProductsByManufacture(manufacture)
    }
    else{
        listProducts = await getAllProduct()
    }
    const listCategory = await getAllCategory()
    res.render('products',{listProducts, listCategory})
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