const express = require('express')
const app = express()

const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')

app.use('/users',userRoutes)
app.use('/products',productRoutes)
app.use('/carts',cartRoutes)



app.use((req,res,next)=>{
    res.status(404).send('<h1> 404 - Page not found</h1>');
    next()

})


app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})