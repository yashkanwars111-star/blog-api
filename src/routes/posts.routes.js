express=require('express');
const router=express.Router()
const postcontroller=require('../contollers/posts.controller')
router.get('/',postcontroller.getallposts)
router.get('/:id',postcontroller.getuserID)
router.post('/test',(req,res)=>{
    console.log("request recieved")
    res.status(200).json({message:`post created: ${req.body.title} `})
})
module.exports=router