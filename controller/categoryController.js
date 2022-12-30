const {addCategoryService, updateCategoryService, getCategoriesService} = require('../service/categoryService')

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

const getAllCategoriesController = async(req,res)=>{
  const categories = await getCategoriesService();
  console.log(categories)
  res.status(200).json(categories)
}

module.exports = {
  addCategoryController,
  updateCategoryController,
  getAllCategoriesController
}