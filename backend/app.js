const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

// ---------    НАШ БД ATLAS

//  mongodb+srv://Maxim:<password>@maxcluster-c99u0.mongodb.net/<dbname>?retryWrites=true&w=majority
//  примечание:  поля user и cluster#-dbname уже заполнены,
//  замените поле на пароль, который создан раньше.
//  ---------------------------------

// const indexRouter = require('./routes/index');
// const signupRouter = require('./routes/signup');
// const loginRouter = require('./routes/login');
// const logoutRouter = require('./routes/logout');
// const profileRouter = require('./routes/profile');
// const createRouter = require('./routes/create');
// const editRouter = require('./routes/edit');
// const deleteRouter = require('./routes/delete');

mongoose.connect("mongodb://localhost:27017/assess", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
const fileStoreOptions = {};
app.use(
  session({
    store: new FileStore(fileStoreOptions),
    key: "party",
    secret: "DigitalBreackthrough",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 5500000,
    },
  })
);

// app.use('/', indexRouter);
// app.use('/signup', signupRouter);
// app.use('/login', loginRouter);
// app.use('/logout', logoutRouter);
// app.use('/profile', profileRouter);
// app.use('/create', createRouter);
// app.use('/edit', editRouter);
// app.use('/delete', deleteRouter);

module.exports = app;
