const express = require('express')
const app = express()

const studentsRouter = require('./routes/students')
const coursesRouter = require('./routes/course')
const homeRouter = require('./routes/home')


app.use('/',homeRouter)
app.use('/students',studentsRouter)
app.use('/course',coursesRouter)



app.use((req,res,next)=>{
    res.status(404).send('<h1> 404 - Page not found</h1>');
    next()

})


app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})