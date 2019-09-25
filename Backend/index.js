'use strict';

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose
    .connect('mongodb://localhost:27017/api_rest_blog', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connection Successful!');

        // Crear servidor y poner escuchar peticiones HTTP

        app.listen(port, () => {
            console.log('Server running in http://localhost:' + port);
        });
    });
