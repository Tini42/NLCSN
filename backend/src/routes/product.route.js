const express = require('express');
const productController = require('../app/controllers/product.controller.js');
const router = express.Router();

router.post('/addProduct', productController.addProduct);

// router.post('/signin', productController.signin);

module.exports = router;
    