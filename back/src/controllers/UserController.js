const { post } = require("../routes")
const User = require('../models/User')
const mailer = require('../lib/mailer')
const disapprovedInLastTenMinutes = require('../utils/disapprovedInLastTenMinutes')

const emailApproved = (user) => 
  `
    <h2>Olá ${user.name}, </h2>
    <p>Seu cadastro foi aprovado.</p>
  `
const emailDisapproved = (user) => 
  `
    <h2>Olá ${user.name}, </h2>
    <p>Seu cadastro foi recusado! Por favor, se cadastre novamente em 10 minutos.</p>
  `

const chosenEmail = {
  approved: emailApproved,
  disapproved: emailDisapproved
} 

module.exports = {
  async post(req, res) {
    try {
      const newUser = {
        name: req.body.name,
        cpf: req.body.cpf,
        cnpj: req.body.cnpj,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        selfie: req.file.filename
      }
      const user = new User(newUser)

      user.save(function (err, user) {
        if (err) return console.error(err)
        res.send({ success: true })
      })
    } catch (error) {
      res.send({ error: true })
    }
  },
  async findAll(req, res) {
    try {
      User.find(function (err, users) {
        if (err) return console.error(err)
        res.send({ data: users })
      }).sort({ createdAt: 'desc' })
    } catch (error) {
      res.send({ error: true })
    }
  },
  async status(req, res) {
    try {
      if (req.query.cpf == "") {
        return res.send({ error: 'Verifique seu CPF'})
      }

      User.findOne({ cpf: req.query.cpf }, function (err, user) {
        if (!user) {
          return res.send({ error: 'Você não possui cadastro pendente' })
        }

        res.send({
          status: user.status,
          disapprovedInLastTenMinutes: disapprovedInLastTenMinutes(user)
        })
      }).sort({ createdAt: 'desc' })
      
    } catch (error) {
      res.send({ error: true })
    }
  },
  async changeStatus(req, res) {
    try {
      User.findOne({ cpf: req.query.cpf }, async function (err, user) {
        if (!user) {
          return res.send({ error: 'Cpf inválido' })
        }

        user.status = req.query.status
        user.updatedAt = new Date()
        await user.save()
        
        if (user.status != 'waiting') {
          await mailer.sendMail({
            to: user.email,
            from: 'no-reply@querodelivery',
            subject: 'Status do cadastro',
            html: chosenEmail[user.status](user)
          })
        }

        res.send({ status: user.status })
      }).sort({ createdAt: 'desc' })
    } catch (error) {
      res.send({ error: true })
    }
  },
  async destroyAll(req, res) {
    try {
      await User.deleteMany()
      res.send('removido todos os usuarios')
    } catch (error) {
      res.send({ error: true })
    }
  }
}