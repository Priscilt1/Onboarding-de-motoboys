const mongoose = require('mongoose')
const mongooseConectUri = process.env.MONGO_URL

mongoose.connect(mongooseConectUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})