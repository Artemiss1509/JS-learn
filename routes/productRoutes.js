const express = require('express')
const router = express.Router()

const controlProduct = require('../Controllers/productControllers')
const controlProduct2 = require('../Controllers/productControllers')
const controlProduct3 = require('../Controllers/productControllers')




router.get('/',controlProduct.productController)

router.get('/:id',controlProduct2.productController2)

router.post('/',controlProduct3.productController3)

module.exports = router;