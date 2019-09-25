'use strict';

// Cargar modulos de node para crear el servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar express (http)
var app = express();

// Cargar ficheros rutas

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS

// Añadir prefijos a rutas

// Ruta de prueba API REST

app.get('/datos-curso', (req, res) => {
    console.log('Hello World');

    return res.status(200).send({
        curso: 'Master en Frameworks JS',
        autor: 'Ricardo Olarte Puell',
        url: 'raop'
    });
});

// Exportar modulo (fichero actual)
module.exports = app;
