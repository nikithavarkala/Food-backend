const mongoose=require("mongoose")
const userStructure=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

const user=mongoose.model("user",userStructure)
module.exports=user;