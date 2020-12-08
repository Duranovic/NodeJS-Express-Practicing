const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: "Course 1"},
    {id: 2, name: "Course 2"},
    {id: 3, name: "Course 3"}
]

app.get("/", (req, res)=>{
    res.send("WELCOME TO NODEJS EXPRESS PRACTICE");
})
app.get("/api/courses", (req, res)=>{
    res.send(courses);
})
app.get("/api/courses/:id", (req, res)=>{
    const course = courses.find(x=>x.id==parseInt(req.params.id));
    if(!course){
        res.status(404).send("The Course with give ID was not found.");
    }
    res.send(course);
})

// POST
app.post("/api/courses", (req, res)=>{
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const result = schema.validate(req.body);
    if(result.error){
        res.status(400).send(result.error);
        return;
    }    
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(result);
})




app.listen(3000, ()=>{console.log("Listening to port 3000...")})