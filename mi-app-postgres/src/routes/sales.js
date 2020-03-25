const {Router}= require('express')
const  getSales  = require('../controllers/saleController')
const router =Router()

router.get('/sales', getSales);
module.exports = router

