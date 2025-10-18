const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.setHeader('Content-type','text/html')
    res.end('<h1>Welcome to the Student & Course Portal API! </h1>')
})

module.exports = router;