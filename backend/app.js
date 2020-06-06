const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const signupRouter = require('./routes/signup');

mongoose.connect(
  'mongodb+srv://Elbrus:123@digitalbreackthrough-9owna.mongodb.net/DigitalBreackthrough?retryWrites=true&w=majority', 
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  },
)
.then(() => console.log('MongoDb connected!!!'))
.catch(() => console.log(err));


app.use(express.static(path.join(__dirname, "public")));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//   res.send('hi!!!');
// });

app.use('/signup', signupRouter);

io.on('connection', function(socket){
  console.log('a user connected');
});

module.exports = http;
