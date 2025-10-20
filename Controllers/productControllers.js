const productService = require('../Services/productService')
const path = require('path')




const productController = (req,res)=>{
    res.sendFile(path.join(__dirname,'../view/product.html'))
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