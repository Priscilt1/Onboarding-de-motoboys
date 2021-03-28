const mongoose = require('mongoose')
const mongooseConectUri = process.env.DB_HOST

mongoose.connect(mongooseConectUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})