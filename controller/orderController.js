const {getListOrder, getDetail, updateStatus} = require('../service/orderService')

const getOrders = async(req, res)=>{
  const status = req.query.status
  const listOrder = await getListOrder(status);
  res.render('orders',{listOrder})
}

const getDetailOrder = async(req,res)=>{
  const idOrder = req.params.idOrder
  const orderDetail = await getDetail(idOrder);
  res.render('orderDetail',{orderDetail})
}

const updateStatusController = async(req,res)=>{
  const {status, idOrder} = req.body
  const result = await updateStatus(status, idOrder)
  if(result){
    res.status(200).json({status: "success"})
  }else{
    res.status(400).json({status: "error"})
  }
}

module.exports = {getOrders, getDetailOrder, updateStatusController}