const productService = require('../Services/productService')
const path = require('path')
const postError = require('../util/centralError')





const productController = (req,res)=>{
    res.sendFile(path.join(__dirname,'../view/product.html'))
}

const productController2 = (req,res)=>{
    productService(req,res,'Fetching product with id: '+req.params.id)
}
const productController3 = (req,res)=>{
    const data = req.body
    console.log(data)
    if(!data){
        return postError(res,data,400)
    }
    res.json(data)
}

module.exports = {
    productController,
    productController2,
    productController3
}