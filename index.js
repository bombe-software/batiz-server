/**
 * Configuracion basica de express y Socket.io
 */
var app = require('express')();
var http = require('http').Server(app);
var bodyParser =  require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
 *	Configuracion de las rutas
 */ 
const facebook_login = require('./routes/facebook_login');
app.get('/facebook_login', facebook_login.get);
app.get('/condiciones', facebook_login.condiciones);

const academias = require('./routes/academias');
app.get('/academias', academias.get);

const proyectos = require('./routes/proyectos');
app.get('/proyectos', proyectos.get);

const proyecto_detalle = require('./routes/proyecto_detalle');
app.get('/proyecto_detalle', proyecto_detalle.get);

/*
 *	Poner a la escucha el servidor 
 */
const port = process.env.PORT || 7000;
http.listen(port, function(){
  console.log('Escuchando por http en: ' + port);
});

