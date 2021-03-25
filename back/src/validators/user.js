async function post(req, res, next) {
  // return res.send({ 'error': 'true' })
  next()
}
async function status(req, res, next) {
  const validStatus = ['reprovado', 'aprovado', 'pendente']
  if (!validStatus.includes(req.query.status)) {
    return res.send({ error: 'Status inválido'})
  }
  next()
}

module.exports = { post, status }