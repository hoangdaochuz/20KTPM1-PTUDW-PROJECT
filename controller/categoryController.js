const {addCategoryService, updateCategoryService} = require('../service/categoryService')

const addCategoryController = async(req,res)=>{
    const {category} = req.body
    const result = await addCategoryService(category)
    if(result){
      res.status(200).json({status: "success"})
    }else{
      res.status(400).json({status: "error"})
    }
}

const updateCategoryController = async(req,res)=>{
  const {categoryUpdate, categoryId} = req.body
  const result = await updateCategoryService(categoryUpdate, categoryId);
  if(result){
    res.status(200).json({status: "success"})
  }else{
    res.status(400).json({status: "error"})
  }
}

module.exports = {
  addCategoryController,
  updateCategoryController
}