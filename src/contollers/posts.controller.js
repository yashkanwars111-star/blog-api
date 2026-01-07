const getallposts=(req,res)=>{
    const posts=[{data1:"post1"},{data2:"post2"}]
    res.json(posts)
}
module.exports={getallposts}
