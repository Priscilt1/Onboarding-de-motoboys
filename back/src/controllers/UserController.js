const { post } = require("../routes");

module.exports = {
  async post(req, res) {
    try {
      res.send({ 'success': req.body.name })
    } catch (error) {
      res.send({ 'error': true })
    }
  }
}