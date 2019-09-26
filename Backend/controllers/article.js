'use strict';

let validator = require('validator');
let Article = require('../models/article');

let controller = {
  datosCurso: (req, res) => {
    let hola = req.body.hola;

    return res.status(200).send({
      curso: 'Master en Frameworks JS',
      autor: 'Ricardo Olarte Puell',
      url: 'raop',
      hola
    });
  },

  test: (req, res) => {
    return res.status(200).send({
      message: 'Soy la accion test de mi controlador de articulos'
    });
  },

  save: (req, res) => {
    // Recoger parametros por post
    let params = req.body;
    let title = params.title;
    let content = params.content;

    // Validar datos (validator node)
    try {
      let validate_title = !validator.isEmpty(title);
      let validate_content = !validator.isEmpty(content);
    } catch (err) {
      return res.status(200).send({
        status: 'error',
        message: 'Faltan datos por enviar'
      });
    }

    if (validate_title && validate_content) {
      // Crear objecto a guardar
      var article = new Article();

      // Asignar valores
      article.title = title;
      article.content = content;
      article.image = null;

      // Guardar el articulo
      article.save((err, articleStored) => {
        if (err || !articleStored) {
          return res.status(404).send({
            status: 'error',
            message: 'El articulo no se ha guardado'
          });
        }
      });

      // Devolver response
      return res.status(200).send({
        status: 'success',
        article: articleStored
      });
    } else {
      return res.status(200).send({
        status: 'error',
        message: 'Los datos no son validos'
      });
    }
  },

  getArticles: (req, res) => {
    let query = Article.find({});
    let last = req.params.last;

    // if (last) {
    if (last || last != undefined) {
      query.limit(5);
    }

    // Find
    query.sort('-_id').exec((err, articles) => {
      if (err) {
        return res.status(500).send({
          status: 'error',
          message: 'Error al traer los articulos'
        });
      }

      if (!articles) {
        return res.status(404).send({
          status: 'error',
          message: 'No hay articulos para mostrar'
        });
      }

      return res.status(200).send({
        status: 'success',
        article: articles
      });
    });

    return res.status(200).send({
      status: 'error',
      message: 'Los datos no son validos'
    });
  }
};

// end controller

module.exports = controller;
