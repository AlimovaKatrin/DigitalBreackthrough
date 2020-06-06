const express = require("express");
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

// ---------    НАШ БД ATLAS

//  mongodb+srv://Maxim:<password>@maxcluster-c99u0.mongodb.net/<dbname>?retryWrites=true&w=majority
//  примечание:  поля user и cluster#-dbname уже заполнены,
//  замените поле на пароль, который создан раньше.
//  ---------------------------------

app.use(express.static(path.join(__dirname, "public")));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('hi');
});

const chat = io.of('/chat')
  .on('connection', (socket) => {
    socket.broadcast.on('chat message', function (msg) {
      console.log(msg);
      socket.emit('chat message', msg);
    });
  });

module.exports = http;
