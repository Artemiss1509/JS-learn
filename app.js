const express = require('express')
const app = express()

const productRouter = require('./routes/products')
const categoryRouter = require('./routes/categories')

app.use((req,res,next)=>{
    console.log(req.method,req.url)
    next()
})
app.use('/products',productRouter)
app.use('/categories',categoryRouter)



app.use((req,res,next)=>{
    res.status(404).send('<h1> 404 - Page not found</h1>');
    next()

})


app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})