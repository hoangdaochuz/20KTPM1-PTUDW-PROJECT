const db  = require('../db/index')

const getAllProduct = async()=>{
  const products = await db.connection.execute('SELECT * FROM product')
  console.log(products[0])
  return products[0]
}

const getAllCategory = async()=>{
  const category = await db.connection.execute('SELECT category.name FROM category')
  return category[0]
}

const getProductsByName = async(name)=>{
  const products = await db.connection.execute('SELECT * FROM product WHERE product.name like ? ',[`%${name}%`])
  console.log(products[0])
  return products[0]
}

const getProductsByCategory = async(category)=>{
  const products = await db.connection.execute("select * from product where product.category like ? ",[`%${category}%`]);
  return products[0] 
}

const getProductsByManufacture = async(manufacture)=>{
  const products = await db.connection.execute("select * from product where product.manufacture like ? ",[`%${manufacture}%`])
  return products[0]
}

module.exports = {getAllProduct,getAllCategory,getProductsByName,getProductsByCategory,getProductsByManufacture}