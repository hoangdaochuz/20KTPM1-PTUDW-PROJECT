const db = require('../db/index')

const getAllProducts = async()=>{

    const result = await db.connection.execute('SELECT * FROM product');;
    return result[0]
}

const getSaleProducts = async()=>{
    const result = await db.connection.execute('SELECT * FROM product WHERE product.sale = 1')
    return result[0]
}

const getSpecificProductById = async(id)=>{
    const result = await db.connection.execute('SELECT * FROM product WHERE product.id = ?', [id])
    return result[0][0]
}

const getRelatedProduct = async(id) => {
    const result = await db.connection.execute('select * from product where product.id != ? and product.category in (select product.category from product  where product.id = ?)', [id,id])
    return result[0]
}
const getProductsByName = async(name)=>{
    const result = await db.connection.execute("select * from product where product.name like ? ",[`%${name}%`]);
    return result[0]
}

const getProductsByCategory = async(category)=>{
    const result = await db.connection.execute("select * from product where product.category like ? ",[`%${category}%`]); 
    return result[0];
}

module.exports = {getAllProducts, getSaleProducts, getSpecificProductById,getRelatedProduct,getProductsByName,getProductsByCategory}


