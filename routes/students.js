const express = require('express')
const router = express.Router()

const students = [

{ id: 1, name: "Alice" },

{ id: 2, name: "Bob" },

{ id: 3, name: "Charlie" }

];

let allStudents = students.map(student=>`${student.name}`).join(',')


router.get('/',(req,res)=>{
        res.setHeader('Content-type','text/html')
        res.end(`<h1> Student: ${allStudents} </h1>`)
})

router.get('/:id',(req,res)=>{
        res.setHeader('Content-type','text/html')
        if(req.params.id<0 || req.params.id>students.length){
            res.end('<h1> Student not found. </h1>')
        }else{
            res.end(`<h1> Student: ${students[req.params.id-1].name} </h1>`)
        }
})

module.exports = router;