const Data=require('../datas/Recipestry')
const recipe=require('../prjctStructures/tryStructure')

const insertTryRecipes=async (req,res)=>{
    const data=Data
    const result=await recipe.insertMany(data);
    return res.send({msg:"recipes has been stored",res:result})
}

const fetch=async (req,res)=>{
    const {category}=req.params
    
    try{
        const result=await recipe.find({category: category })

        return res.send(result)
    }catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports={insertTryRecipes,fetch}