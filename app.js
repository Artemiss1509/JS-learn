const express = require('express')

const app = express()

app.use(express.json())



app.get('/products',(req,res)=>{
    res.setHeader('Content-Type','text/html')
    

    res.end(`<h1> Here is the list of all products. </h1>`)
})

app.post('/products',(req,res)=>{
    const products = 'A new product has been added.'
    res.json(products)
})


app.get('/categories',(req,res)=>{
    res.setHeader('Content-Type','text/html')
    

    res.end(`<h1> Here is the list of all categories. </h1>`)
})

app.post('/categories',(req,res)=>{
    const categories = 'A new category has been created.'
    res.json(categories)
})

app.use((req,res,next)=>{
    res.status(404).send('<h1> 404 - Page not found</h1>');

})


app.listen(4000,()=>{
    console.log("Server is running on http://localhost:4000")
})