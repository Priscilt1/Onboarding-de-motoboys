const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  cpf: String,
  cnpj: String,
  email: String,
  phone: String,
  address: String,
})