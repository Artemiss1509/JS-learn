const express = require('express')
const router = express.Router()

router.use(express.json())

router.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.end(`<h1> Here is the list of all catagories. </h1>`)
})

router.post('/',(req,res)=>{
    const categories = 'A new category has been created.'
    res.json(categories)
})

module.exports = router;