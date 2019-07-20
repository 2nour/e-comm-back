const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const userId = require('mongoose').Types.idUser;



const { mongooose } = require('../db/config');
const { Item } = require('../models/item')




var app = express();
app.use(bodyParser.json());



app.get('/getAll',(req,res)=>{

    User.find((err, docs) => {
        if (!err) {
             res.status(200).send(docs); }
        else { console.log("error in retriving users" + jason.stringify(err, undefined, 2)); }

    })

});

