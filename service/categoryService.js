const db = require('../db/index')

const addCategoryService = async(category)=>{
   const result = await db.connection.execute('INSERT INTO category(name) values(?)',[category])
   return result
}

const updateCategoryService = async(categoryUpdate, categoryId)=>{
  const result  =await db.connection.execute('UPDATE category SET category.name = ? WHERE category.id = ?', [`${categoryUpdate}`, categoryId])
  return result
}

const getCategoriesService = async()=>{
  const result = await db.connection.execute('SELECT * FROM category')
  return result[0]
}

module.exports = {
  addCategoryService,
  updateCategoryService,
  getCategoriesService
}