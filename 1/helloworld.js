// http://expressjs.com/es/starter/hello-world.html

// requerimos el modulo express
var express = require('express');
// instanciamos express, y lo asignamos a la variable app
var app = express();
// agregamos una ruta GET que regresa un texto
app.get('/home', function(req, res) {  
  res.end('Hello World!');
})
// escuchamos en el puerto que recibimos como argumento
app.listen(process.argv[2]);
