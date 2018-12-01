const path = require('path');
const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//Conectando a la base de datos
mongoose.connect('mongodb://localhost/parcial-final')
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));


//Importando rutas
const indexRoutes = require('./routes/index');

//Configuracines
app.set('port',process.env.PORT  || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extend: false}));

//routes
app.use('/',indexRoutes);

//Iniciando Servidor
app.listen(app.get('port'),() =>{
    console.log("Server on port 3000");
})


