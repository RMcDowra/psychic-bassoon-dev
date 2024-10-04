const mongodb = require("mongodb");

mongodb.connect(process.env.URI, {     
    useNewUrlParser: true,     
    useUnifiedTopology: true,   })   
    .then(() => {     
    console.log("Connected to MongoDB");   
    })   
    .catch((err) => { 
        console.log(err);   
});
