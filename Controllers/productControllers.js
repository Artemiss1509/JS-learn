const productService = require('../Services/productService')
const path = require('path')




const productController = (req,res)=>{
    res.sendFile(path.join(__dirname,'../view/product.html'))
}

const productController2 = (req,res)=>{
    productService(req,res,'Fetching product with id: '+req.params.id)
}
const productController3 = (req,res)=>{
    const data = req.body
    console.log(data)
    res.json(data)
}

module.exports = {
    productController,
    productController2,
    productController3
}