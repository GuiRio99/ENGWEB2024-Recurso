var mongoose = require('mongoose')
const { modelName } = require ('../models/livros')
var Livro = require('../models/livros')
const livro = require('../models/livros')

module.exports.list = () =>{
    return Livro
        .find()
        .sort({_id:1})
        .exec()
}

module.exports.findById = id => {
    return Livro
        .findOne({_id : id})
        .exec()
}

module.exports.findByCharater = carater => {
    return Livro
        .find({'characters' : carater})
        .exec()
}

module.exports.findByGenre = genres => {
    return Livro
        .find({'genres' : genres})
        .exec()
}

module.exports.listCharaters = () =>{
    return Livro
        .distinct('characters')
        .sort({'characters':1})
        .exec()
}

module.exports.listGenres = () =>{
    return Livro
        .distinct("genres")
        .sort({"genres":1})
        .exec()
}

module.exports.insert = (Livro) =>{
    var newLivro = new Livro(Livro)
    return newLivro.save()
}

module.exports.delete = (id) => {
    return Livro
        .deleteOne({ _id: id })  
        .exec();
}

module.exports.update = (id, Livro) =>{
    return Livro
        .findByIdAndUpdate(id, Livro, {new : true})
        .exec()
}
