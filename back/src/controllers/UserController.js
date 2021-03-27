const { post } = require("../routes")
const differenceInMinutes = require('date-fns/differenceInMinutes')
const User = require('../models/User')
const mailer = require('../lib/mailer')

const email = (user, disapprovedInLastTenMinutes) => `
    <h2>Olá ${user.name}, 🙃 </h2>
    <p>${disapprovedInLastTenMinutes && 'Você foi reprovado. Se cadastre novamente após 10 minutos'}</p>
`

module.exports = {
  async post(req, res) {
    try {
      const newUser = {
        name: req.body.name,
        cpf: req.body.cpf,
        cnpj: req.body.cnpj,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
      }
      const user = new User(newUser)

      user.save(function (err, user) {
        if (err) return console.error(err)
        res.send({ data: user })
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
      })
    } catch (error) {
      res.send({ error: true })
    }
  },
  async status(req, res) {
    try {
      if (req.query.cpf == "") {
        return res.send({ error: 'Verifique seu cpf'})
      }

      User.findOne({ cpf: req.query.cpf }, function (err, user) {
        if (!user) {
          return res.send({ error: 'Cpf inválido' })
        }

        res.send({ status: user.status })
      })

      
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
        
        const differenceInMinute = differenceInMinutes(
          Date.now(),
          user.updatedAt
        )

        const lastTenMinutes = (differenceInMinute <= 10) 
        let disapprovedInLastTenMinutes = false
        if (req.query.status === 'reprovado' && lastTenMinutes) {
          // informar que ele podera submeter novamente apos esse tempo
          disapprovedInLastTenMinutes = true
        }

        // caso cadastro esteja aprovado ou não existe, exibir info "Você não possui cadastro pendente"


        user.status = req.query.status
        user.updatedAt = new Date()
        await user.save()
        

        await mailer.sendMail({
          to: user.email,
          from: 'no-reply@querodelivery',
          subject: 'Status do cadastro',
          html: email(user, disapprovedInLastTenMinutes)
        })

        res.send({ status: user.status })
      })
    } catch (error) {
      
    }
  },
  async destroyAll(req, res) {
    try {
      await User.deleteMany()
      
      res.send('removido todos os usuarios')
    } catch (error) {
      
    }
  }
}