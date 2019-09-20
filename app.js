
// requieres
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// inicializar variables
var app = express();

// body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');

// conexion base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB',
(err, res)=> {
    if(err) { throw err;}
    console.log('Base de datos: \x1b[36m%s\x1b[0m', 'online') ;
}
);

// rutas
app.use('/usuario', usuarioRoutes);
app.use('/', appRoutes);

// excuhar peticiones
app.listen(3000, () => {
    console.log('Node/Express: \x1b[36m%s\x1b[0m', 'online');
});

// rutas
