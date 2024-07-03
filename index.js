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
mongoose.connect("mongodb+srv://odunuyiadeolu:KujeitwDqHZaR3Dz@cluster0.ofdpuiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
 
.then(()=>{
  console.log("connected to the DB");
  app.listen(3000, ()=>{
      console.log('server is running')
  });
})
.catch(()=> {
  console.log("connection failed");
});