"use strict"
var express = require("express");
var path = require("path");
var app = express();

// Definir carpeta para recursos estaticos.
app.use(express.static("public"));

// Definir la ruto principal de la aplicacion, busca index en public dentro de __dirname.
app.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// Definir el puerto en el que se publicará el servidor.
app.listen("3000", function() {
    console.log("Empezó la APP. P: 3000");
});