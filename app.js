const express = require("express");
const app = express();
require('dotenv').config();
const routes = require('./server/routes/movieRoutes');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')
const { ObjectId } = require('mongodb')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://rmcdowra:${process.env.MONGO_URI}@cluster0.0bqty.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; 

console.log(uri);

// -----------------------------------------------------

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use ('/', routes);
app.set('view engine', 'ejs')


// ------------------------------------------------------

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

// -----------------------------------------
app.get('/mongo', async (req, res)=>{

    await client.connect();
    console.log("connected?");
    // Send a ping to confirm a successful connection
    let result = await client.db("reeds-db").collection("whatever-collection").find({}).toArray()
      console.log(result);
  
      res.render('mongo', {
        mongoResult: result
      });
  
  })
  
  
  app.get('/', function (req, res) {
    // res.send('Hello World')
    res.sendFile('index.html')
  })
  
  app.get('/ejs', (req,res)=>{
  ``
    res.render('index', {
      myServerVariable : "something from server"
    });
  
    //can you get content from client...to console? 
  })
  
  


app.listen(5000)

