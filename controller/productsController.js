const viewProduct = (req, res, next)=>{
    res.render('products')
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