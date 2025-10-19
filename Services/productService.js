const productService = (req,res,data)=>{
    res.setHeader('Content-Type','text/html')
    res.end(data)
}

module.exports = productService;