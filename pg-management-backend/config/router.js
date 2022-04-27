const express=require('express')
const router=express.Router()
const userCtlr=require('../app/controlers/userCtlr')
const buildingsCtlr=require('../app/controlers/buildingsCtlr')
const roomsCtlr = require('../app/controlers/roomsCtlr')
const ternantsCtlr=require('../app/controlers/ternantsCtlr')
router.get('/api/users',userCtlr.list)
router.post('/api/users',userCtlr.create)

router.get('/api/buildings',buildingsCtlr.list)
router.get('/api/buildings/:id',buildingsCtlr.findOne)
router.post('/api/buildings',buildingsCtlr.create)
router.put('/api/buildings/:id',buildingsCtlr.update)
router.delete('/api/buildings/:id',buildingsCtlr.remove)

router.get('/api/rooms',roomsCtlr.list)
router.get('/api/rooms/:id',roomsCtlr.findOne)
router.post('/api/rooms',roomsCtlr.create)
router.put('/api/rooms/:id',roomsCtlr.update)
router.delete('/api/rooms/:id',roomsCtlr.remove)


router.get('/api/ternants',ternantsCtlr.list)
router.get('/api/ternants/:id',ternantsCtlr.findOne)
router.post('/api/ternants',ternantsCtlr.create)
router.put('/api/ternants/:id',ternantsCtlr.update)
router.delete('/api/ternants/:id',ternantsCtlr.remove)
module.exports=router