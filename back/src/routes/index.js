const express = require ('express')
const routes = express.Router()
const users = require('./users')

routes.use('/users', users)

module.exports = routes