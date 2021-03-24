const express = require('express')
const routes = require ("./routes")


const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(routes)

server.listen(5000, () => { 
  console.log('Server run')
})