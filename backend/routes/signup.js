const router = require('express').Router();
const { User } = require('../models/user');

router.post('/', (req, res) => {
  User.create({
    
    name: 'Alesha',
    email: '123@mail.ru',
    password: '123',
  })
    .then(() => console.log(user))
    .catch((err) => console.log(err))
});

module.exports = router;
