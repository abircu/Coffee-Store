const express=require('express')
const cors=require('cors');
const app=express()
const {connectDB} = require("./config/db")
const port=process.env.PORT || 5000;

require('dotenv').config();
const db = connectDB()
// midleware
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('coffe making server is running.....');
})
// get data from database
app.get('/coffee',async(req,res)=>{
  const cursor= (await db).collection('coffee').find();

  const result= await cursor.toArray();
  console.log(result)
  res.send(result)
})
app.post('/coffee',async(req,res)=>{
  const user=req.body;
  const collection = (await db).collection('coffee')
  console.log('new user',user);
  // const result=await usersCollection.insertOne(user);
  // res.send(result);
  const result=await collection.insertOne(user);
  res.send(result);
})
app.listen(port,()=>{
    console.log(`coffe server is running on port: ${port}`)
})

// mongodb password  2cOJHki8proIoYFq