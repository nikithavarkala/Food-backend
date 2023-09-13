const cors=require('cors')
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
// const url="mongodb+srv://nikithav:varkala1234@cluster0.p2v99sl.mongodb.net/Employee?retryWrites=true&w=majority"
const recipeRoutes=require('./Routes/RecipeRoutes')
const userRoutes=require('./Routes/userRoutes')

const connection=require("./config/dbMongoose")
const express = require("express");
const ActivityRoutes = require('./Routes/ActivityRoutes');
const app = express();

app.use(cors())

app.use(express.json());

app.use('/api',recipeRoutes)
app.use('/user',userRoutes)
app.use('/api',ActivityRoutes)

app.listen(3001, async () => {
    try {
        await connection();
        console.log("server running on port 3001");
    } catch (err) {
        console.log(err, "error occurred in running");
    }
});