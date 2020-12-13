const express = require("express");
const { route } = require("./posts");
const router = express();

router.use(express.json());

router.get("/", (req, res)=>{
    res.send("ALL::TEST");
})
router.get("/:id", (req, res)=>{
    res.send("ID::TEST");
})

module.exports = router;