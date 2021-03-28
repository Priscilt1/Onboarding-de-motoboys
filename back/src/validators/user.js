const User = require('../models/User')
const disapprovedInLastTenMinutes = require('../utils/disapprovedInLastTenMinutes')

async function post(req, res, next) {
  const user = await User.findOne({ cpf: req.body.cpf })
  if (user) {
    if (disapprovedInLastTenMinutes(user)) {
      return res.send({ error: true, message: 'Tente novamente em 10 minutos.' })
    }    
  }
  next()
}
async function status(req, res, next) {
  const validStatus = ['disapproved', 'approved', 'waiting']
  if (!validStatus.includes(req.query.status)) {
    return res.send({ error: 'Status inválido'})
  }
  next()
}

module.exports = { post, status }