const showCart = (req, res, next)=>{
    if(!req.user){
        res.redirect('/auth/login')
    }
    res.render("shoppingCart")
}

module.exports = {showCart}