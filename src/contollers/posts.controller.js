const getallposts=(req,res)=>{
    const posts=[{data1:"post1"},{data2:"post2"}]
    res.json(posts)
}
async function getuserID(req,res){
    const userID=req.params.id
    res.status(200).json({message:`Fetching data for post with ID:${userID}`})
}
module.exports={getallposts,getuserID}

