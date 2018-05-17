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
const academias = require('./routes/academias');
app.get('/academias', academias.get);

/*
 *	Poner a la escucha el servidor 
 */
const port = process.env.PORT || 7000;
http.listen(port, function(){
  console.log('Escuchando por http en: ' + port);
});

