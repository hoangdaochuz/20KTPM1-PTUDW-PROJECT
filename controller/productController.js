const getListProduct = (req, res, next)=>{
    res.render('products', {products: [
        {   id: 1,
            name: "Kyrie 5 Daughter",
        img: "https://bizweb.dktcdn.net/100/427/393/articles/nike-kyrie-7-daughters-azurie-cq9326-501.jpeg?v=1630076827343",
        price: 5000000},
        {   
            id: 2,
            name: "Giày Nike Zoom Kobe 5 Protro '5 Rings'",
        img: "https://product.hstatic.net/200000384421/product/677052_01.jpg_68185eb5fac74607a581c0bf04fc6cb3_858a1f0814114244b534695c6a87c6a0.png",
        price: 9800000},
        {   id: 3,
            name: "Nike KD 15",
        img: "https://sneakerdaily.vn/wp-content/uploads/2022/11/giay-nike-kd-15-ep-nightmares-dm1054-500-2.jpg.webp",
        price: 4600000},
    ]})
}
const showDetail = (req, res, next)=>{
    const products = [
         {   id: 1,
             name: "Kyrie 5 Daughter",
         img: "https://bizweb.dktcdn.net/100/427/393/articles/nike-kyrie-7-daughters-azurie-cq9326-501.jpeg?v=1630076827343",
         price: 5000000},
         {   
             id: 2,
             name: "Giày Nike Zoom Kobe 5 Protro '5 Rings'",
         img: "https://product.hstatic.net/200000384421/product/677052_01.jpg_68185eb5fac74607a581c0bf04fc6cb3_858a1f0814114244b534695c6a87c6a0.png",
         price: 9800000},
         {   id: 3,
             name: "Nike KD 15",
         img: "https://sneakerdaily.vn/wp-content/uploads/2022/11/giay-nike-kd-15-ep-nightmares-dm1054-500-2.jpg.webp",
         price: 4600000},
     ]
     const id = req.params.id;
     console.log(id)
     const productItem = products.find((product)=>product.id == id)
     console.log(productItem)
     res.render('productDetail', {productItem});
 }
 

module.exports = {getListProduct, showDetail}