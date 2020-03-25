const {Router}= require('express')
const  getClients  = require('../controllers/clientController')
const router =Router()

router.get('/clients', getClients);
module.exports = router

