const servidor= require('express');
const cors= require('cors');
const app= servidor();

//settings
app.set('port',4200);

//midlleware
app.use(cors());
app.use(servidor.json());

//routes
app.use('/frutas',require('./routers/frutasR'));


module.exports= app;