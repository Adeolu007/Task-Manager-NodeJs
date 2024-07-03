const express = require('express');
const mongoose = require('mongoose')
const Task = require('./models/task.model.js')
const taskRoute = require('./routes/task.route.js')
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api/tasks", taskRoute)



app.listen(3000, ()=>{
    console.log('server is running')
})

app.get('/', (req, res) => {
	res.send("hello from Node")
}) 

//change the mongoose property
mongoose.connect("mongodb+srv://Adeolu007:Treasurer15@backenddb.kdpqjq2.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
 
.then(()=>{
  console.log("connected to the DB");
  app.listen(3000, ()=>{
      console.log('server is running')
  });
})
.catch(()=> {
  console.log("connection failed");
});