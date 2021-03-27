const express = require('express')
const cors = require('cors')
const routes = require ("./routes")
require('./database')
require('./models/User')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    server.use(cors())
    next()
})
server.use(routes)

server.listen(5000, () => { 
  console.log('Server run')
})