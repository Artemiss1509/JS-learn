const express = require('express')
const router = express.Router()

const controlProduct = require('../Controllers/productControllers')




router.get('/',controlProduct.productController)

router.get('/:id',controlProduct.productController2)

router.post('/',controlProduct.productController3)

module.exports = router;