const db = require('../db/index')
const getOrdersOfUSer = async(idUser)=>{
  const result = await db.connection.execute('SELECT * FROM orders WHERE orders.id_user = ?', [idUser])
  return result[0]
}

const getDetailOrder = async(idOrder)=>{
  console.log("id order", idOrder)
  const result = await db.connection.execute('select order_detail.id_order, orders.status, product.name, product.image,product.price, order_detail.quantity from order_detail, orders, product where order_detail.id_product = product.id and order_detail.id_order = orders.id and order_detail.id_order = ?', [idOrder])
  return result[0]
}

module.exports = {
  getOrdersOfUSer,
  getDetailOrder
}