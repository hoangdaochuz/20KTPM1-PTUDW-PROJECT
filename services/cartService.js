
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

exports.decreaseProduct = async(productId, cart)=>{
  const foundProduct = cart.products.find(product=>product.id === productId)
  const index = cart.products.indexOf(foundProduct)
  if(foundProduct){
    if(foundProduct.quantity>1){
      foundProduct.quantity = foundProduct.quantity -1
    }else{
        if(index>-1){
          cart.products.splice(index,1)
        }
    }
  }
}

exports.initCart = ()=>(
  {
    products: []
  }
)
