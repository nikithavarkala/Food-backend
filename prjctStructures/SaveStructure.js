const mongoose=require("mongoose")

const SaveStructure=mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    recipe:[{
            key:{
                type:String,
                required:true, 
            },
            img:{
                type:String,
                required:true, 
            },
            source:{
                type:String,
                required:true, 
            },
            label:{
                type:String,
                required:true,
            }
        }]
})

const save=mongoose.model("save",SaveStructure)
module.exports=save;