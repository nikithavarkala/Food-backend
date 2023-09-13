const Activity=require('../prjctStructures/ActivityStructure')

const ActivityData=require('../datas/ActivityData');

const storeActivity=async (req,res)=>{
    // const data=ActivityData
    const result=await Activity.insertMany(ActivityData);
    return res.send({msg:"Activity Data has been stored",res:result})
}

const fetchActive=async (req,res)=>{
    const {category}=req.params
    try{
        if(category=="active"){
            const result=await Activity.find()
            return res.send(result)
        }
        else{
            const result=await Activity.find({ category: category })
            return res.send(result)
        }
    }catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports={storeActivity,fetchActive}

