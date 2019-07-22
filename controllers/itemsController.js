const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const userId = require('mongoose').Types.idUser;



const { mongooose } = require('../db/config');
const { Item } = require('../models/item')




var app = express();
app.use(bodyParser.json());



app.get('/getAll', (req, res) => {

    Item.find((err, docs) => {
        if (!err) {
            res.status(200).send(docs);
        }
        else { console.log("error in retriving users" + jason.stringify(err, undefined, 2)); }

    })

});

app.put('/search/:n', (req, res) => {
    let nom = req.params.n;
    Item.find({ nom }).then((items) => {
        if (items) {
            res.status(200).send(items);
        }
        else { console.log("not found" +err.message) }

    })

});



app.post("/itemAjout", (req, res) => {
    let data = req.body;

    let item = new Item({
        reference: data.reference,
        nom: data.nom,
        quantite: data.quantite,
        prix:data.prix,
        description:data. description,
        couleur:data.couleur,
        taille :data.taille 
    })


    item.save().then(() => {


        res.status(200).send(item);

    }).catch((err) => {
        res.status(400).send({
            message: "erreur : " + err
        })
    });
});

module.exports = app;

