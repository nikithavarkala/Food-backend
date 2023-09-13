const mongoose = require('mongoose');

const ActivityStructure = new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        name2:{
            type:String,
            required:true
        },
        time:{
            type:String,
            required:true
        },
        review:{
            type:String,
        }
        
});

const Activity = mongoose.model('activity', ActivityStructure);

module.exports = Activity;
