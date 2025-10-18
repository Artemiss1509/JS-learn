const express = require('express')
const app = express()

const booksRouter = require('./routes/book')

app.use('/books',booksRouter)



app.use((req,res,next)=>{
    res.status(404).send('<h1> 404 - Page not found</h1>');
    next()

})


app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})