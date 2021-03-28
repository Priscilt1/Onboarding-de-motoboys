const express = require ('express')
const multer = require('../middleware/multer')


const UserValidator = require('../validators/user')
const UserController = require('../controllers/UserController')

const routes = express.Router()

routes.get('/', UserController.findAll)
routes.post('/register', UserValidator.post, multer.single('selfie'), UserController.post)
routes.get('/status', UserController.status)
routes.get('/change', UserValidator.status, UserController.changeStatus)
routes.delete('/destroy', UserController.destroyAll)

module.exports = routes