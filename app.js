const express = require('express')

const app = express()

app.use(express.json())



app.get('/welcome/:username',(req,res)=>{
    res.setHeader('Content-Type','text/html')
    const name = req.params.username
    const role = req.query.role

    res.end(`<h1> Welcome ${name}! You are a ${role} </h1>`)
})


app.use((req,res,next)=>{
    res.status(404).send('<h1> 404 - Page not found</h1>');

})


app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})