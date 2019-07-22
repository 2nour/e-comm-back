const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");


var app = express();
var port = "3000";


const user= require('./controllers/userController');
const item =require('./controllers/itemsController')


app.use(bodyParser.json());
app.use(cors());



app.use('/user',user);
app.use('/item',item);



app.listen(port, () => console.log(`Listening on port ${port}`));
