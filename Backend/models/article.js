'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let articleSchema = Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
  image: String
});

module.exports = mongoose.model('Article', articleSchema);
// articles --> guarda documentos de este tipo y con esta estructura dentro de la colecciòn
