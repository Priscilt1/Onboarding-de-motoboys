async function post(req, res, next) {
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