express=require('express');
const router=express.Router()

router.get('/',(req,res)=>{
    const posts={message:"hi this is a post"}
    res.json(posts)
})
module.exports=router