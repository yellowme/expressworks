// http://expressjs.com/es/starter/basic-routing.html
// http://expressjs.com/es/guide/using-middleware.html
// http://expressjs.com/es/starter/static-files.html
var express = require('express');
var app     = express();
var path    = require('path');

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.listen(process.argv[2]);
