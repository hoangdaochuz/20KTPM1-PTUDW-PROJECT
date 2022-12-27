
const {getSpecificProductById}= require('./productService')

exports.add = (productId, cart)=>{
  const foundProduct = cart.products.find(product=>product.id === productId);
  if(foundProduct){
    foundProduct.quantity = foundProduct.quantity+1;
  }else{
    cart.products.push({id: productId, quantity: 1});
  }
}

exports.cartDetail = async(cart)=>{
  const cartDetails = {...cart};
  cartDetails.products  = await Promise.all(cartDetails.products.map(async product=>{
    const productInfo = await getSpecificProductById(product.id);
    return {
      ...product,
      name: productInfo.name,
      price: productInfo.price,
      image: productInfo.image,
    }
  }))

  return cartDetails;
}

exports.initCart = ()=>(
  {
    products: []
  }
)
