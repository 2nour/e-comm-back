const mongooose = require('mongoose');
const validator = require('validator');


const itemSchema = mongooose.Schema({

    refrerence:
    {
        type: String,
        require: true,
        trim: true,
        
    },
    nom :
    {
        type: String,
        require: true,
        trim: true,
        m
    },
    quantite :
    {
        type: String,
        require: true,
        trim: true,
      
    },
    prix:
    {
        type: String,
        require: true,
        trim: true,
    },
    description:
    {
        type: String,
        require: true,
        trim: true,
        minlength: 2
    },
    couleur:
    {
        type: String,
        require: true,
        trim: true,
        minlength: 2
    },
    taille :
    {
        type: String,
        require: true,
        trim: true,
        
    }



})

Item =mongooose.model('Item',itemSchema);
module.exports ={ Item};