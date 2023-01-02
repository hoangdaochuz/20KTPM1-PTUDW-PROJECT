const { add, initCart, cartDetail, decreaseProduct } = require("../../services/cartService");

const getCart = async (req, res) => {
  console.log("get cart", req.session);
  console.log(req.session.cart);
  console.log(req.session.test);
  if(!req.session.cart){
    res.json({status: "Empty"})
  }else{

    res.json(await cartDetail(req.session.cart));
  }
};

const addItemToCart = (req, res) => {
  console.log("Vao add to cart ");
  console.log(req.body);
  let session = req.session

  const { productId } = req.body;
  if (session.cart) {
    console.log("da co cart");
  }
  if (!session.cart) {
    session.cart = initCart();
    session.save();
  }

  console.log(" before add item to cart", session);
  add(productId, session.cart);
  console.log(session.cart);
  console.log(" after add item to cart", session);
  res.json(session.cart);
};

const decreaseItemOfCart = (req, res)=>{
  const {productId} = req.body
  decreaseProduct(productId, req.session.cart);
  res.json(req.session.cart)
}

module.exports = {
  getCart,
  addItemToCart,
  decreaseItemOfCart,
};
