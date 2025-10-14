const express = require('express');
const { createProduct, getAllProducts, getSingleProduct, deleteproduct } = require('../controllers/productController');
//to create routes need Router from express
const router = express.Router()

router.post('/create/product', createProduct);
router.get('/products/list', getAllProducts);
router.get('/single/product/:id', getSingleProduct);
router.delete('/delete/product/:id', deleteproduct);

//export the router
module.exports = router;