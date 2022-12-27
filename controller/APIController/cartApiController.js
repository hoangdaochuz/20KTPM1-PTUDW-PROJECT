const { add, initCart, cartDetail } = require("../../services/cartService");

const getCart = async (req, res) => {
  console.log("get cart", req.session);
  console.log(req.session.cart);
  console.log(req.session.test);
  res.json(await cartDetail(req.session.cart));
};

const addItemToCart = (req, res) => {
  console.log("Vao add to cart ");
  console.log(req.body);

  const { productId } = req.body;
  req.session.test = "test";
  if (req.session.cart) {
    console.log("da co cart");
  }
  if (!req.session.cart) {
    req.session.cart = initCart();
    req.session.save();
  }

  console.log(" before add item to cart", req.session);
  add(productId, req.session.cart);
  console.log(req.session.cart);
  console.log(" after add item to cart", req.session);
  res.json(req.session.cart);
};

module.exports = {
  getCart,
  addItemToCart,
};
