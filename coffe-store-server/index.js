const express=require('express')
const cors=require('cors');
const app=express()
const {connectDB} = require("./config/db");
const { ObjectId } = require('mongodb');
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
// update data operation
app.get('/coffee/:id',async(req,res)=>{
  const id=req.params.id;
  console.log("id ",id)
  const query={_id: new ObjectId(id)}
  console.log("qouery ",query)
  const result = (await db).collection('coffee').findOne(query);
  const response = await result;
  console.log("result is ",response)
  res.send(response);
})

// for sending data front-end to backend througth the server
app.post('/coffee',async(req,res)=>{
  const user=req.body;
  const collection = (await db).collection('coffee')
  console.log('new user',user);
  // const result=await usersCollection.insertOne(user);
  // res.send(result);
  const result=await collection.insertOne(user);
  res.send(result);
})
// update in database
app.put('/coffee/:id', async(req,res)=>{
  const id=req.params.id;
  const filter={_id: new ObjectId(id)}
  const options={upsert:true};
  const updatedCoffee=req.body;
  const coffee={
    $set:{
      name:updatedCoffee.name,
      suplier:updatedCoffee.suplier,
      taste:updatedCoffee.taste, 
      category:updatedCoffee.category,
      details:updatedCoffee.details,
      photo:updatedCoffee.photo
    }
  }
  const result = (await db).collection('coffee').updateOne(filter,coffee,options);
  const coffeeUpdate=await result;
  res.send(coffeeUpdate)
})
// Delete operation
app.delete('/coffee/:id', async(req, res)=>{
  const id=req.params.id;
  const query={_id:new ObjectId(id)}
  const result=(await db).collection('coffee').deleteOne(query)
  res.send(result)
})

app.listen(port,()=>{
    console.log(`coffe server is running on port: ${port}`)
})

// mongodb password  2cOJHki8proIoYFq