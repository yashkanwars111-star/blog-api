require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8080;
const mainRouters=require('./src/routes/MainRoutes');
app.use('/api/v1',mainRouters);




const ErrorHandler=async (err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).json({status:false,message:"Internal server error"})
}
app.use(ErrorHandler)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);})