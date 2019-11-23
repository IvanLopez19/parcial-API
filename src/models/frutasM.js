const {Schema,model}= require('mongoose');
const frutasschema= new Schema({
    nombre: String,
    peso: String,
    color: String,
    arboles: String,
    calorias: String,
},{timestamps:true});

module.exports= model('fruta',frutasschema);