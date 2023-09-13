const mongoose = require('mongoose');

const tryStructure = new mongoose.Schema({
        label:{
            type:String,
            required:true
        },
        img:{
            type:String,
            required:true
        },
        comment:{
            type:String,
            required:true
        },
        user:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        }
        
});

const tryRecipe = mongoose.model('tryRecipes', tryStructure);

module.exports = tryRecipe;
