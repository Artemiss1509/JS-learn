const getCartForUser = (req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.end('Fetching cart for user with id: '+req.params.id)
}

const addProductToCart = (req,res)=>{
    res.send('Adding product to cart for user with id: '+req.params.id)
}

module.exports = {
    getCartForUser,
    addProductToCart
}