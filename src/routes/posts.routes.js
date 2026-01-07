express=require('express');
const router=express.Router()
const postcontroller=require('../contollers/posts.controller')
router.get('/',postcontroller.getallposts)
module.exports=router