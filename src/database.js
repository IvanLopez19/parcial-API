const mongoose= require('mongoose');

const URI= process.env.MONGO_URI;



mongoose.connect(URI,{
    useCreateIndex:true,
    useNewUrlParser:true
});

const connection= mongoose.connection;

connection.once('open',()=>{console.log('conectado a la base')});



