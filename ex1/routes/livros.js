var express = require('express');
var router = express.Router();
var livroModel = require('../models/livros')
var Livro = require('../controllers/livros')

router.get('/characters', function(req, res) {
    Livro.listCharaters()
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
    });

router.get('/genres', function(req, res) {
    Livro.listGenres()
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
    });

router.get('/', function(req, res) {
    if (req.query.charater) {
        Livro.findByCharater(req.query.charater)
            .then(data => res.jsonp(data))
            .catch(erro => res.jsonp(erro));
    } else if (req.query.genre) {
        Livro.findByGenre(req.query.genre)
            .then(data => res.jsonp(data))
            .catch(erro => res.jsonp(erro));
    } else {
        Livro.list()
            .then(data => res.jsonp(data))
            .catch(erro => res.jsonp(erro));
    }
});

router.get('/:id', function(req, res) {
    Livro.findById(req.params.id)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
});

router.post('/', function(req, res) {
    console.log(req.body)
    Livro.insert(req.body)
        .then(data => res.status(201).jsonp(data))
        .catch(erro => res.status(523).jsonp(erro))
    });

router.delete('/:id', function(req, res) {
    console.log(req.params.id)
    Livro.delete(req.params.id)
        .then(data => res.status(200).jsonp(data))
        .catch(erro => res.status(404).jsonp(erro));
})

router.put('/:id', function(req, res) {
    Livro.update(req.params.id, req.body)
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
  });

module.exports = router;
