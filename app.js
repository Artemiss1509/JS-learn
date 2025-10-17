const express = require('express')

const app = express()

app.use((req,res,next)=>{
    req.user = 'Rohan'
    next()
})

app.use('/welcome',(req,res,next)=>{
    res.setHeader('Content-Type','text/html')
    res.end(
        `
        <h1> Welcome ${req.user} </h1>
        `
    )
    next()
})

app.listen(3000)