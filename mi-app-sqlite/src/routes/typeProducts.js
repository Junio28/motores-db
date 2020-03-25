const {Router}= require('express')
const  getTypeProducts  = require('../controllers/typeProductsController')
const router =Router()

router.get('/type-product', getTypeProducts);
module.exports = router

