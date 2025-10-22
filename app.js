const express = require('express')
const mysql = require('mysql2')
const app = express()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Artemiss1509',
    database:'testDB'
})

connection.connect((err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log('Connected to database');

    const creationQuery = `create table Students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    )`
    connection.execute(creationQuery,(err)=>{
        if(err){
            console.log(err)
            connection.end()
            return;
        }
        console.log('Table created');
    })
})
app.use(express.json())

app.use(express.static('Public'))

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