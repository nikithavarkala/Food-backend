const {insertSave, fetchsave}=require('../controller/SaveController')
const saveRoutes=require('express').Router()

saveRoutes.post('/insertsave/:key/:img/:source/:label',insertSave)
saveRoutes.get('/fetchsave',fetchsave)

module.exports=saveRoutes