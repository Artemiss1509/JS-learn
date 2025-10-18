const express = require('express')
const router = express.Router()

const courses = [

{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

];

let allCourses = courses.map(course=>`${course.name}`).join(',')

router.get('/',(req,res)=>{
    res.setHeader('Content-type','text/html')
    res.end(`<h1>Courses: ${allCourses} </h1>`)
})

router.get('/:id',(req,res)=>{
    res.setHeader('Content-type','text/html')
    if(req.params.id<0 || req.params.id>courses.length){
        res.end('<h1> Course not found. </h1>')
    }else{
        res.end(`<h1> Course: ${courses[req.params.id-1].name}, Description: ${courses[req.params.id-1].description} </h1>`)
    }
})

module.exports = router;