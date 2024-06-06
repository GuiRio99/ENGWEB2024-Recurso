var express = require('express');
var router = express.Router();
var axios = require('axios')

router.get('/', function(req, res, next) {

  axios.get("http://localhost:17000/books")
    .then( resp =>{
        var livros = resp.data
        res.status(200).render("livrosListPage", {"listLivros" : livros})                        
    })
    .catch(erro =>{
        res.status(501).render("error", {"error" : erro})       
    })
});

router.get('/:id', function(req, res, next) {

  axios.get("http://localhost:17000/books/" + req.params.id)
    .then( resp =>{
        var livro = resp.data
        res.status(200).render("livroPage", {"livro" : livro})                        
    })
    .catch(erro =>{
        res.status(502).render("error", {"error" : erro})       
    })
});


module.exports = router;

