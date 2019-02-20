require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(`${process.env.URL}/${process.env.DB_NAME}`, {
  useNewUrlparser: true
})

const User = mongoose.model('User', {
  ame: String,
  age: Number,
  email: String
})
const killua = new User({
  name: 'killua',
  age: 30,
  email: 'killua@yahoo.com'
})

killua.save().then(() => console.log('created new user'))
