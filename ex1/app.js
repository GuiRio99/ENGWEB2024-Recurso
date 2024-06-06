var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var livrosRouter = require('./routes/livros');

var app = express();


var mongoDB = 'mongodb://127.0.0.1/livros'

mongoose.connect(mongoDB)
var db = mongoose.connection
db.on("error", console.error.bind(console, "Erro de conexão"))
db.once("open", () =>{
  console.log("Conexão ao mongoDB realizada com sucesso")
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', livrosRouter);

module.exports = app;