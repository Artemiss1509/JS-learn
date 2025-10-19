const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.end('Fetching all products')
})

router.get('/:id',(req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.end('Fetching product with id: '+req.params.id)
})

router.post('/',(req,res)=>{
    res.send('Adding a new product')
})

module.exports = router;