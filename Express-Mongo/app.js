const express =  require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

// Import Routes
const testController = require("./routes/testController");
const posts = require("./routes/posts");

app.use("/api/test", testController);
app.use("/api/posts", posts);

// Routes
app.get('/api', (req, res)=>{
    res.send("WE ARE ON HOME");
})

// Conntect to DB 
mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true, useNewUrlParser:true}, ()=>{
    console.log("Connected to DB");
})


app.listen(3000, ()=>{console.log("LISTENING PORT 3000")})