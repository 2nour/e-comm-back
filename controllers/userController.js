const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');




const { mongooose } = require('../db/config');
const { User } = require('../models/user')




var app = express();
app.use(bodyParser.json());







app.post("/inscription", (req, res) => {
    let data = req.body;

    let privateKey = 10;
    let hashedPassword = bcrypt.hashSync(data._motDePass, privateKey);

    var user = new User({
        nom: data._nom,
        prenom: data._prenom,
        email: data._email,
        tel: data._tel,
        motDePass: hashedPassword,
        
    });

    user.save().then(() => {

        res.status(200).send(user);

    }).catch((err) => {
        res.status(400).send({
            message: "erreur : " + err
        })
    });

});


app.post("/connection", (req, res) => {

    var data = req.body;
    let email = data._email;
    let motDePass = data._motDePass;

    User.findOne({ email }).then((user) => {

        if (!user) {
            res.status(400).send({ message: "email incorrect" })
        }

        if (!bcrypt.compareSync(motDePass, user.motDePass)) {
            res.status(404).send({ message: "mot de passe incorrect" })

        }

        let token = jwt.sign({ idUser: user._id, statut: user.statut }, "kts").toString();
        res.status(200).send({ token });

    }
    ).catch((err) => {
        res.status(400).send({
            message: "erreur : " + err
        })
    });

});

module.exports = app;