const db  = require('../db/index')

const getTotalNumberProducts = async () => {
  const result = await db.connection.execute('SELECT * FROM product')
  return result[0].length
}

const getAllProduct = async(sort, limit, offset)=>{
  let products = null

  if(sort === 'name')
    products = await db.connection.execute(`SELECT * FROM product order by product.name asc LIMIT ${offset}, ${limit}`);
  else if(sort === 'price')
    products = await db.connection.execute(`SELECT * FROM product order by product.price asc LIMIT ${offset}, ${limit}`);
  else
    products = await db.connection.execute(`SELECT * FROM product limit ${offset}, ${limit}`)

  return products[0]
}

const getAllCategory = async()=>{
  const category = await db.connection.execute(`SELECT category.name FROM category`)
  return category[0]
}

const getProductsByName = async(name, sort, limit, offset)=>{
  let products = null

  if(sort === 'name'){
    products = await db.connection.execute(`SELECT * FROM product WHERE product.name like ? order by product.name asc LIMIT ${offset}, ${limit}`,[`%${name}%`])
  } else if(sort === 'price') {
    products = await db.connection.execute(`SELECT * FROM product WHERE product.name like ? order by product.price asc LIMIT ${offset}, ${limit}`,[`%${name}%`])
  } else {
    products = await db.connection.execute(`SELECT * FROM product WHERE product.name like ? LIMIT ${offset}, ${limit}`,[`%${name}%`])
  }
  return products[0]
}

const getProductsByCategory = async(category, sort, limit, offset)=>{
  let products = null

  if(sort ==='name') {
    products = await db.connection.execute(`select * from product where product.category like ? order by product.name asc LIMIT ${offset}, ${limit}`,[`%${category}%`]);
  } else if(sort ==='price') {
    products = await db.connection.execute(`select * from product where product.category like ? order by product.price asc LIMIT ${offset}, ${limit}`,[`%${category}%`]);
  } else {
    products = await db.connection.execute(`select * from product where product.category like ? LIMIT ${offset}, ${limit}`,[`%${category}%`]);
  }
  return products[0] 
}

const getProductsByManufacture = async(manufacture, sort, limit, offset)=>{
  let products = null 

  if(sort === 'name') {
    products = await db.connection.execute(`select * from product where product.manufacture like ? order by product.name asc LIMIT ${offset}, ${limit}`,[`%${manufacture}%`])
  } else if(sort === 'price') {
    products = await db.connection.execute(`select * from product where product.manufacture like ? order by product.price asc LIMIT ${offset}, ${limit}`,[`%${manufacture}%`])
  } else {
    products = await db.connection.execute(`select * from product where product.manufacture like ? LIMIT ${offset}, ${limit}`,[`%${manufacture}%`])
  }
  
  return products[0]
}

module.exports = {getAllProduct,getAllCategory,getProductsByName,getProductsByCategory,getProductsByManufacture, getTotalNumberProducts}