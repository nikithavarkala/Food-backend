const ActivityRoutes=require("express").Router()

const {storeActivity, fetchActive}=require('../controller/ActivityController')

ActivityRoutes.post('/storeActivity',storeActivity)
ActivityRoutes.get('/fetchActive/:category',fetchActive)

module.exports=ActivityRoutes