const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Save = require("../prjctStructures/SaveStructure");

const insertSave = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]; 
    const decodedToken = jwt.verify(token, "nikitha");
    const { userId } = decodedToken;
    // console.log(req.params)
    const { key,img,source,label} = req.params;

  try {
    const existingUser = await Save.findOne({ userId });

    if (!existingUser) {
        const newUser = new Save({
          userId,
          recipe: [{ key, img, source, label }],
        });
        await newUser.save();
        res.status(201).json({ message: "New user created with data" });
    } else {
        existingUser.recipe.push({ key,img,source,label });
        await existingUser.save();
        res.status(201).json({ message: "Data added to existing user" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while saving the data" });
  }
};

const fetchsave=async (req,res)=>{
    const token = req.headers.authorization.split(' ')[1];

    try {
        const decodedToken = jwt.verify(token, "nikitha");

        const userId = decodedToken.userId;

        const user = await Save.findOne({ userId });

        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while fetching user data" });
    }
}

module.exports = {insertSave,fetchsave};
