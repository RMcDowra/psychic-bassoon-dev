const mongoose = require("mongoose");
/*
mongoose.connect(process.env.MONGODB_URL, {     
    useNewUrlParser: true,     
    useUnifiedTopology: true,   })   
    .then(() => {     
    console.log("Connected to MongoDB");   
    })   
    .catch((err) => { 
        console.log(err);   
}); 
*/



mongoose.connect(process.env.URI, {     
    useNewUrlParser: true,     
    useUnifiedTopology: true,   })   
    .then(() => {     
    console.log("Connected to MongoDB");   
    })   
    .catch((err) => { 
        console.log(err);   
});
