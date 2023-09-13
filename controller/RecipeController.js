const Data=require('../RecipesData')
const recipe=require('../prjctStructures/RecipeStructure')

const insertRecipes=async (req,res)=>{
    const data=Data
    const result=await recipe.insertMany(data);
    return res.send({msg:"recipes has been stored",res:result})
}

const fetchRecipes=async (req,res)=>{
    
}

module.exports={insertRecipes}