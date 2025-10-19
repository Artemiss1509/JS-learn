const express = require('express')
const router = express.Router()

const cartController = require('../Controllers/cartController')


router.get('/:id',cartController.getCartForUser)

router.post('/:id',cartController.addProductToCart)

module.exports = router;