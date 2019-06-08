// Este es el archivo principal para correr el servidor Node server.js

// Requerir Express

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Asigna puerto 8080 o el de Heroku.

var PORT = process.env.PORT || 8080;

// Hacer la carpeta public visible.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

 app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Importar rutas y que el servidor tenga acceso a las mismas
 var routes = require("./controllers/burgers_controller.js");

 app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

console.log("conectado");
