const mongoose = require('mongoose')
const mongooseConectUri = 'mongodb://localhost/querodelivery'

mongoose.connect(mongooseConectUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})