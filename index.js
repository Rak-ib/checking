const express=require('express')
const cors=require('cors')
const app=express();
const port=5500;
app.use(cors())
app.use(express.json())




app.get('/',(req,res)=>{
    console.log("nothing");
    res.send("hey")
})




app.listen(port,()=>{
    console.log(`welcome to port=${port}`)
})