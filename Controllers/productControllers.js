const productController = (req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.end('Fetching all products')
}

const productController2 = (req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.end('Fetching product with id: '+req.params.id)
}
const productController3 = (req,res)=>{
    res.send('Adding a new product')
}

module.exports = {
    productController,
    productController2,
    productController3
}