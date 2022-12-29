const db = require('../db/index')
const getListOrder = async(status)=>{
  console.log("status", status)
  let result = null;
  if(status){
    result = await db.connection.execute('SELECT * FROM orders WHERE orders.status = ? order by orders.create_at ASC',[`${status}`])
  }else{
    result = await db.connection.execute('SELECT * FROM orders order by orders.create_at ASC')
  }
  console.log(result[0])
  return result[0]
}

const getDetail = async(idOrder)=>{
  const result = await db.connection.execute('select order_detail.id_order, orders.status, product.name, product.image,product.price, order_detail.quantity from order_detail, orders, product where order_detail.id_product = product.id and order_detail.id_order = orders.id and order_detail.id_order = ?', [idOrder])
  return result[0]
}

const updateStatus = async(status, id)=>{
  const result = await db.connection.execute('UPDATE orders SET orders.status = ? WHERE orders.id = ?',[`${status}`, id])
  return result
}

module.exports = {
  getListOrder,
  getDetail,
  updateStatus
}