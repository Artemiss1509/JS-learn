const productService = require('../Services/productService')



const productController = (req,res)=>{
    productService(req,res,'Fetching all products')
}

const productController2 = (req,res)=>{
    productService(req,res,'Fetching product with id: '+req.params.id)
}
const productController3 = (req,res)=>{
    productService(req,res,'Adding a new product')
}

module.exports = {
    productController,
    productController2,
    productController3
}