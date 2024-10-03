const express = require("express");
require('dotenv').config();
const routes = require('./server/route/routes');
const cors = require('cors');
const PORT = 5000;
const app = express();

// -----------------------------------------------------

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use ('/', routes);

// -------------------------------------------------------

app.listen(PORT, () => {
    console.log('Listening on port ${5000}');
})

