'use strict';

let validator = require('validator');
var fs = require('fs');
var path = require('path');

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
    var params = req.body;
    var title = params.title;
    var content = params.content;

    // Validar datos (validator node)
    try {
      var validate_title = !validator.isEmpty(title);
      var validate_content = !validator.isEmpty(content);
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

        // Devolver response
        return res.status(200).send({
          status: 'success',
          article: articleStored
        });
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
  },

  getArticle: (req, res) => {
    // Recoger id de la url
    var article_id = req.params.id;

    // Comprobar si existe
    if (!article_id || article_id == null) {
      return res.status(404).send({
        status: 'error',
        message: 'No hay articulos para mostrar'
      });
    }

    // Buscar el articulo

    Article.findById(article_id, (err, article) => {
      if (err || !article) {
        return res.status(404).send({
          status: 'error',
          message: 'No existe el articulo'
        });
      }

      // Devolver en json

      return res.status(404).send({
        status: 'success',
        article
      });
    });
  },

  update: (req, res) => {
    // Recoger el id de la url
    var article_id = req.params.id;

    // Recoger datos
    var params = req.body;

    // Validar datos
    try {
      var validate_title = !validator.isEmpty(params.title);
      var validate_content = !validator.isEmpty(params.content);
    } catch (err) {
      return res.status(404).send({
        status: 'error',
        message: 'Faltan datos por enviar'
      });
    }

    if (validate_title && validate_content) {
      // Find and update
      Article.findOneAndUpdate(
        { _id: article_id },
        params,
        { new: true },
        (err, articleUpdated) => {
          if (err || !articleUpdated) {
            return res.status(500).send({
              status: 'error',
              message: 'Error al actualizar'
            });
          }

          return res.status(200).send({
            status: 'success',
            article: articleUpdated
          });
        }
      );
    } else {
      return res.status(404).send({
        status: 'error',
        message: 'La validacion no es correcta'
      });
    }
  },

  delete: (req, res) => {
    var article_id = req.params.id;

    Article.findOneAndDelete({ _id: article_id }, (err, articleDeleted) => {
      if (err || !articleDeleted) {
        return res.status(500).send({
          status: 'error',
          message: 'Error al borrar'
        });
      }

      return res.status(200).send({
        status: 'success',
        article: articleDeleted
      });
    });
  },

  upload: (req, res) => {
    // Configurar el modulo connect multiparty router/article.js

    // Recoger fichero

    var file_name = 'Imagen no subida...';

    if (!req.files) {
      return res.status(404).send({
        status: 'error',
        message: file_name
      });
    }

    // Conseguir nombre y la extension
    var file_path = req.files.file0.path;
    var file_split = file_path.split('\\');

    // *** EN LINUX / MAC ** //
    // var file_split = file_path.split('/');

    // Nombre del archivo
    var file_name = file_split[2];

    // extension del fichero

    var extension_split = file_name.split('.');
    var file_extension = extension_split[1];

    // Comprobar la extension

    if (
      file_extension != 'png' &&
      file_extension != 'jpg' &&
      file_extension != 'jpeg' &&
      file_extension != 'gif'
    ) {
      fs.unlink(file_path, err => {
        return res.status(200).send({
          status: 'error',
          message: 'La extension no es valida'
        });
      });
    } else {
      var article_id = req.params.id;
      // Buscar articulo, asignar nombre de la imagen y actualizar

      Article.findOneAndUpdate(
        { _id: article_id },
        { image: file_name },
        { new: true },
        (err, articleUpdated) => {
          if (err || !articleUpdated) {
            return res.status(404).send({
              status: 'error',
              message: 'Error al guardar la imagen de articulo'
            });
          }

          return res.status(200).send({
            status: 'success',
            article: articleUpdated
          });
        }
      );
    }
  }
};

// end controller

module.exports = controller;
