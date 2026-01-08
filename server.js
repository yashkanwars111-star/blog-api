const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000
const postrouter=require('./src/routes/posts.routes')
app.get('/',(req,res)=>{
    res.send('HI USER')
})

app.use('/api/v1/posts',postrouter)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}) 

