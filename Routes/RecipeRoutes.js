const {insertRecipes}=require('../controller/RecipeController')
const { insertTryRecipes ,fetch} = require('../controller/tryController')

const recipeRoutes=require("express").Router()

recipeRoutes.post('/insertRecipes',insertRecipes)
recipeRoutes.post('/insertTryRecipes',insertTryRecipes)
recipeRoutes.get('/fetch/:category',fetch)

module.exports=recipeRoutes