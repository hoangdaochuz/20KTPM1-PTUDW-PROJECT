const showCheckout = (req, res, next)=>{
    res.render("checkout")
}
const showThankYou = (req, res, next)=>{
    res.render('thankyou')
}

module.exports = {showCheckout, showThankYou}