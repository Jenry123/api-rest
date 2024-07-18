const express=require('express')
const routes=express.Router()
const ofreceController=require('../controllers/Ofrece')

routes.get('/',ofreceController.obtenerOfrece)

module.exports=routes