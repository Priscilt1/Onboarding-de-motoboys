const express = require ('express')
const bodyParser = require('body-parser')
const UserValidator = require('../validators/user')
const UserController = require('../controllers/UserController')

const routes = express.Router()

routes.get('/register', (req, res) => {
  res.send('hi')
})

routes.use(bodyParser.json())
routes.post('/register', UserValidator.post, UserController.post)

module.exports = routes