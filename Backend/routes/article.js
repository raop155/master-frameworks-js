'use strict';

let express = require('express');
let ArticleController = require('../controllers/article');

let router = express.Router();

// Rutas de prueba
router.post('/datos-curso', ArticleController.datosCurso);
router.get('/test-de-controlador', ArticleController.test);

// Rutas utiles
router.post('/save', ArticleController.save);
router.get('/articles/:last?', ArticleController.getArticles);

module.exports = router;
