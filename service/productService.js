const db  = require('../db/index')

const getAllProduct = async(sort)=>{
  let products = null

  if(sort === 'name')
    products = await db.connection.execute('SELECT * FROM product order by product.name asc');
  else if(sort === 'price')
    products = await db.connection.execute('SELECT * FROM product order by product.price asc');
  else
    products = await db.connection.execute('SELECT * FROM product')
  return products[0]
}

const getAllCategory = async(s)=>{
  const category = await db.connection.execute('SELECT category.name FROM category')
  return category[0]
}

const getProductsByName = async(name, sort)=>{
  let products = null

  if(sort === 'name'){
    products = await db.connection.execute('SELECT * FROM product WHERE product.name like ? order by product.name asc',[`%${name}%`])
  } else if(sort === 'price') {
    products = await db.connection.execute('SELECT * FROM product WHERE product.name like ? order by product.price asc',[`%${name}%`])
  } else {
    products = await db.connection.execute('SELECT * FROM product WHERE product.name like ? ',[`%${name}%`])
  }
  return products[0]
}

const getProductsByCategory = async(category, sort)=>{
  let products = null

  if(sort ==='name') {
    products = await db.connection.execute("select * from product where product.category like ? order by product.name asc",[`%${category}%`]);
  } else if(sort ==='price') {
    products = await db.connection.execute("select * from product where product.category like ? order by product.price asc",[`%${category}%`]);
  } else {
    products = await db.connection.execute("select * from product where product.category like ? ",[`%${category}%`]);
  }
  return products[0] 
}

const getProductsByManufacture = async(manufacture, sort)=>{
  let products = null 

  if(sort === 'name') {
    products = await db.connection.execute("select * from product where product.manufacture like ? order by product.name asc",[`%${manufacture}%`])
  } else if(sort === 'price') {
    products = await db.connection.execute("select * from product where product.manufacture like ? order by product.price asc",[`%${manufacture}%`])
  } else {
    products = await db.connection.execute("select * from product where product.manufacture like ? ",[`%${manufacture}%`])
  }
  
  return products[0]
}

module.exports = {getAllProduct,getAllCategory,getProductsByName,getProductsByCategory,getProductsByManufacture}