const express = require("express");
const router = express();
const Post = require("../models/Post");

router.use(express.json());

// Get all
router.get("/", async (req, res)=>{
    try {
        const posts = await Post.find();
        res.send(posts);
    } catch (error) {
        res.send(error);
    }
})

// Get by id
router.get("/:id", async (req, res)=>{
    try {
        const requestedID = req.params.id;
        const posts = await Post.find({_id:requestedID});
        res.send(posts);
    } catch (error) {
        res.send(error);
    }
})

// Post
router.post('/', async (req, res)=>{    
    const post = new Post({
        title: req.body.title,
        description: req.body.description        
    });

    try{
        const savedPost = await post.save();
        res.send(savedPost);
    }catch(err){
        console.log(err);
    }
});

// Update
router.put('/:id', async (req, res)=>{    
    try {
        const updatedPost = await Post.updateOne(
            {_id:req.params.id}, 
            {$set: {
                title: req.body.title,
                description: req.body.description
            }});   
        res.send(updatedPost);
    } catch (error) {
        res.send(error);
    }
    
})

// Delete
router.delete('/:id', async (req, res)=>{
    try {
        const removedPost = await Post.remove({_id:req.params.id});
        res.send(removedPost);
    } catch (error) {
        res.send(error);       
    }
});


module.exports = router;