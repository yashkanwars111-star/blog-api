express=require('express');
const router=express.Router()
const postcontroller=require('../contollers/posts.controller')
router.get('/',postcontroller.getallposts)
router.get('/:id',postcontroller.getuserID)
module.exports=router