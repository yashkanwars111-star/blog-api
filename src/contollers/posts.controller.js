const getallposts=(req,res)=>{
    const {sortby} = req.query;
    const posts=[{data1:"post1",date:"2023-01-01"},{data2:"post2",date:"2023-01-02"}]
    if(sortby==="date"){
        posts.sort((a,b)=>new Date(b.date)-Date(a.date))
        console.log("posts sorted by date")
    }
    res.status(200).json({
  success: true,
  message: 'All posts fetched successfully'
});
}
async function getuserID(req,res){
    const userID=req.params.id
   res.status(200).json({
  success: true,
  data: { postId: userID }
});
}
module.exports={getallposts,getuserID}

