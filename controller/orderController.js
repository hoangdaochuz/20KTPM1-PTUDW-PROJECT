const db = require("../db")
const {getOrdersOfUSer, getDetailOrder} = require('../services/orderService')
const getListOrder = async(req,res)=>{
  const idUser = req.params.idUser
  const listOrder = await getOrdersOfUSer(idUser);
  res.render('listOrder', {listOrder})
}

const getOrderDetail = async(req,res)=>{
  const idOrder = req.params.idOrder
  const orderDetail = await getDetailOrder(idOrder)
  res.render('orderDetail',{orderDetail})
}

const getOrderApi = async(req,res)=>{
  const idUser = req.params.idUser
  const result = await db.connection.execute('SELECT * FROM orders WHERE orders.id_user = ?', [idUser])
  res.status(200).json(result[0])
}

module.exports = {
  getListOrder,
  getOrderDetail,
  getOrderApi
}