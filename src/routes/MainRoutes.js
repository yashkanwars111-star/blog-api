express=require('express');
const router=express.Router()
const postrouter=require('./posts.routes')

router.use("/posts",postrouter)
module.exports=router 

