const e = require('express');
const db = require('../db/index')

const getAllProducts = async(sort, minPrice, maxPrice)=>{
    let result = null;

    if(minPrice && maxPrice) {
        result = await db.connection.execute('SELECT * FROM product where product.price >= ? and product.price <= ?', [minPrice, maxPrice]);
        
        if(sort === 'price')
            result = await db.connection.execute('SELECT * FROM product where product.price >= ? and product.price <= ? order by product.price asc', [minPrice, maxPrice]);
        else if(sort === 'releasedate')
            result = await db.connection.execute('SELECT * FROM product where product.price >= ? and product.price <= ? order by product.create_at asc', [minPrice, maxPrice]);
    }
    else if(sort === 'price')
        result = await db.connection.execute('SELECT * FROM product order by product.price asc');
    else if(sort === 'releasedate')
        result = await db.connection.execute('SELECT * FROM product order by product.create_at asc');
    else
        result = await db.connection.execute('SELECT * FROM product');
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
const getProductsByName = async(name, sort, minPrice, maxPrice)=> {
    let result = null;
    
    if(minPrice && maxPrice) 
        result = await db.connection.execute('SELECT * FROM product where product.price >= ? and product.price <= ?', [minPrice, maxPrice]);
    else if(sort === 'price')
        result = await db.connection.execute('SELECT * FROM product where product.name like ? order by product.price asc',[`%${name}%`]);
    else if(sort === 'releasedate')
        result = await db.connection.execute('select * from product where product.name like ? order by product.create_at asc',[`%${name}%`]);
    else
        result = await db.connection.execute('select * from product where product.name like ? ',[`%${name}%`]);
    return result[0]
}

const getProductsByCategory = async(category, sort, minPrice, maxPrice)=>{
    let result = null;

    if(minPrice && maxPrice) 
        result = await db.connection.execute('SELECT * FROM product where product.price >= ? and product.price <= ?', [minPrice, maxPrice]);
    else if(sort === 'price')
        result = await db.connection.execute('SELECT * FROM product where product.category like ? order by product.price asc',[`%${category}%`]);
    else if(sort === 'releasedate')
        result = await db.connection.execute('select * from product where product.category like ? order by product.create_at',[`%${category}%`]);
    else
        result = await db.connection.execute("select * from product where product.category like ? ",[`%${category}%`]); 
    return result[0];
}

const getProductsByManufacture = async(manufacture, sort, minPrice, maxPrice)=>{ 
    let result = null;

    if(minPrice && maxPrice) 
        result = await db.connection.execute('SELECT * FROM product where product.price >= ? and product.price <= ?', [minPrice, maxPrice]);
    if(sort === 'price')
        result = await db.connection.execute("select * from product where product.manufacture like ? order by product.price asc",[`%${manufacture}%`]);
    else if(sort === 'releasedate')
        result = await db.connection.execute("select * from product where product.manufacture like ? order by product.create_at asc",[`%${manufacture}%`]);
    else 
        result = await db.connection.execute("select * from product where product.manufacture like ? ",[`%${manufacture}%`]);
    return result[0]; 
}

module.exports = {getAllProducts, getSaleProducts, getSpecificProductById,getRelatedProduct,getProductsByName,getProductsByCategory,getProductsByManufacture}


