/**
 * Configuracion basica de express y Socket.io
 */
var app = require('express')();
var http = require('http').Server(app);
var bodyParser =  require("body-parser");


var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
passport.use(new Strategy({
  clientID: '172252590129742',
  clientSecret: '2164c43945f78e9fc211b8de5747cd82',
  callbackURL: "http://localhost:7000/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, cb) {
  return cb(null, profile);
}));
passport.serializeUser(function(user, cb) {
  cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(passport.initialize());
app.use(passport.session());

/*
 *	Configuracion de las rutas
 */ 
const facebook_login = require('./routes/facebook_login');
app.get('/facebook_login', facebook_login.get);
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    console.log(res.user)
    res.redirect('/');
});


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

