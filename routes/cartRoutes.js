const express = require('express')
const router = express.Router()

router.get('/:id',(req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.end('Fetching cart for user with id: '+req.params.id)
})

router.post('/:id',(req,res)=>{
    res.send('Adding product to cart for user with id: '+req.params.id)
})

module.exports = router;