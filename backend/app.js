const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

// ---------    НАШ БД ATLAS

//  mongodb+srv://Maxim:<password>@maxcluster-c99u0.mongodb.net/<dbname>?retryWrites=true&w=majority
//  примечание:  поля user и cluster#-dbname уже заполнены,
//  замените поле на пароль, который создан раньше.
//  ---------------------------------

mongoose.connect("mongodb://localhost:27017/assess", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


app.use(express.static(path.join(__dirname, "public")));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('hi');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

module.exports = http;
