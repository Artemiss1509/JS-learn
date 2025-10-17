const express = require('express')

const app = express()

app.use(express.json())

const users = [
    {
        'name':'Rohan'

    },
    {
        'name':'Tyan'
    },
    {
        'name':'Sara'
    }
]
let newUsers = users.map(user => `<p> ${user.name} </p>`).join('')


app.get('/users',(req,res)=>{
    res.setHeader('Content-Type','text/html')
    

    res.end(`<h1> Here is the list of all users. </h1>
        
        ${newUsers}`)
})

app.post('/users',(req,res)=>{
    const user = req.body
    users.push(user)
    newUsers = users.map(user => `<p> ${user.name} </p>`).join('')
    res.json(user)
})


const orders = [
    {
        'name':'Order1'

    },
    {
        'name':'Order2'
    },
    {
        'name':'Order3'
    }
]

let newOrders = orders.map(order => `<p> ${order.name} </p>`).join('')


app.get('/orders',(req,res)=>{
    res.setHeader('Content-Type','text/html')
    

    res.end(`<h1> Here is the list of all orders. </h1>
        
        ${newOrders}`)
})

app.post('/orders',(req,res)=>{
    const order = req.body
    orders.push(order)
    newOrders = orders.map(order => `<p> ${order.name} </p>`).join('')
    res.json(order)
})


app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})