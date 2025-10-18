const express = require('express')
const router = express.Router()

router.use(express.json())
router.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.end(`<h1> Here is the list of all products. </h1>`)
})

router.post('/',(req,res)=>{
    const products = 'A new product has been added.'
    res.json(products)
})

module.exports = router;