const e = require("express");
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

const addOrderApi = async(req,res)=>{
  const {idUser, sum_cost, shipping_address, create_at, productsOrder} = req.body
  const status = 'Đã tiếp nhận'
  const result = await db.connection.execute('INSERT INTO orders(id_user, sum_cost, shipping_address, create_at, status) VALUES(?,?,?,?,?)',[idUser,sum_cost,shipping_address,create_at,status])
  // console.log(result)
  const id_order = result[0].insertId
  let result2 = null;
  
  console.log(productsOrder)
  productsOrder.map(async(product)=>{
    result2 = await db.connection.execute('INSERT INTO order_detail(id_order, id_product, price, quantity, create_at) values(?,?,?,?,?)',[id_order,parseInt(product.id), product.price,product.quantity, create_at ])

  })
  
  if(result){
    res.status(200).json({status: "success"})
  }else{
    res.status(200).json({status: "error"})
  }
}

module.exports = {
  getListOrder,
  getOrderDetail,
  getOrderApi,
  addOrderApi,
}