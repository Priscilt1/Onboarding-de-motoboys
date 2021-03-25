const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = new Schema({
  name: String,
  cpf: String,
  cnpj: String,
  email: String,
  phone: String,
  address: String,
  status: { type: String, default: 'pendente' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})