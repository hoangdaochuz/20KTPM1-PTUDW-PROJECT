const e = require("express");
const db = require("../db/index");
const getTotalNumberOfProduct = async () => {
  const result = await db.connection.execute("SELECT * FROM product");
  return result[0].length;
};

const getAllProducts = async (sort, minPrice, maxPrice, limit, offset) => {
  let result = null;
  console.log(limit, offset);
  if (minPrice && maxPrice) {
    result = await db.connection.execute(
      `SELECT * FROM product where product.price >= ? and product.price <= ? limit ${offset},${limit}`,
      [minPrice, maxPrice]
    );

    if (sort === "price")
      result = await db.connection.execute(
        `SELECT * FROM product where product.price >= ? and product.price <= ? order by product.price asc limit ${offset},${limit}`,
        [minPrice, maxPrice]
      );
    else if (sort === "releasedate")
      result = await db.connection.execute(
        `SELECT * FROM product where product.price >= ? and product.price <= ? order by product.create_at asc limit ${offset},${limit}`,
        [minPrice, maxPrice]
      );
  } else if (sort === "price")
    result = await db.connection.execute(
      `SELECT * FROM product order by product.price asc limit ${offset},${limit}`
    );
  else if (sort === "releasedate")
    result = await db.connection.execute(
      `SELECT * FROM product order by product.create_at asc limit ${offset},${limit}`
    );
  else
    result = await db.connection.execute(
      `SELECT * FROM product limit ${offset},${limit}`
    );
  return result;
};

const getSaleProducts = async () => {
  const result = await db.connection.execute(
    "SELECT * FROM product WHERE product.sale = 1"
  );
  return result[0];
};

const getSpecificProductById = async (id) => {
  const result = await db.connection.execute(
    "SELECT * FROM product WHERE product.id = ?",
    [id]
  );
  return result[0][0];
};

const getRelatedProduct = async (id) => {
  const result = await db.connection.execute(
    "select * from product where product.id != ? and product.category in (select product.category from product  where product.id = ?)",
    [id, id]
  );
  return result[0];
};
const getProductsByName = async (
  name,
  sort,
  minPrice,
  maxPrice,
  limit,
  offset
) => {
  let result = null;

  if (minPrice && maxPrice)
    result = await db.connection.execute(
      `SELECT * FROM product where product.price >= ? and product.price <= ? limit ${offset},${limit}`,
      [minPrice, maxPrice]
    );
  else if (sort === "price")
    result = await db.connection.execute(
      `SELECT * FROM product where product.name like ? order by product.price asc limit ${offset},${limit}`,
      [`%${name}%`]
    );
  else if (sort === "releasedate")
    result = await db.connection.execute(
      `select * from product where product.name like ? order by product.create_at asc limit ${offset},${limit}`,
      [`%${name}%`]
    );
  else
    result = await db.connection.execute(
      `select * from product where product.name like ? limit ${offset},${limit}`,
      [`%${name}%`]
    );
  return result[0];
};

const getProductsByCategory = async (
  category,
  sort,
  minPrice,
  maxPrice,
  limit,
  offset
) => {
  let result = null;

  if (minPrice && maxPrice)
    result = await db.connection.execute(
      `SELECT * FROM product where product.price >= ? and product.price <= ? limit ${offset},${limit}`,
      [minPrice, maxPrice]
    );
  else if (sort === "price")
    result = await db.connection.execute(
      `SELECT * FROM product where product.category like ? order by product.price asc limit ${offset},${limit}`,
      [`%${category}%`]
    );
  else if (sort === "releasedate")
    result = await db.connection.execute(
      `select * from product where product.category like ? order by product.create_at limit ${offset},${limit}`,
      [`%${category}%`]
    );
  else
    result = await db.connection.execute(
      `select * from product where product.category like ? limit ${offset},${limit}`,
      [`%${category}%`]
    );
  return result[0];
};

const getProductsByManufacture = async (
  manufacture,
  sort,
  minPrice,
  maxPrice,
  limit,
  offset
) => {
  let result = null;

  if (minPrice && maxPrice)
    result = await db.connection.execute(
      `SELECT * FROM product where product.price >= ? and product.price <= ? limit ${offset},${limit}`,
      [minPrice, maxPrice]
    );
  if (sort === "price")
    result = await db.connection.execute(
      `select * from product where product.manufacture like ? order by product.price asc limit ${offset},${limit}`,
      [`%${manufacture}%`]
    );
  else if (sort === "releasedate")
    result = await db.connection.execute(
      `select * from product where product.manufacture like ? order by product.create_at asc limit ${offset},${limit}`,
      [`%${manufacture}%`]
    );
  else
    result = await db.connection.execute(
      `select * from product where product.manufacture like ? limit ${offset},${limit}`,
      [`%${manufacture}%`]
    );
  return result[0];
};

const getReviewOfProduct = async (id_product, page) => {
  const result = await db.connection.execute(
    `select user.full_name, user.avatar, review.content from user, review where review.id_user = user.id and review.id_product = ? limit ${3} offset ${
      (page - 1) * 3
    }`,
    [id_product]
  );
  return result[0];
};

const getTotalReviewOfProduct = async (id_product) => {
  const result = await db.connection.execute(
    "select count(*) from review where review.id_product = ?",
    [id_product]
  );
  return result[0][0]['count(*)'];
};

module.exports = {
  getAllProducts,
  getSaleProducts,
  getSpecificProductById,
  getRelatedProduct,
  getProductsByName,
  getProductsByCategory,
  getProductsByManufacture,
  getTotalNumberOfProduct,
  getReviewOfProduct,
  getTotalReviewOfProduct,
};
