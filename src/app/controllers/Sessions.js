const User = require('../models/User')
const Yup = require('yup')
const JWT = require('jsonwebtoken')
const auths = require('../../config/authentication')

class SessionsLogin {


    async store(req, res) {
        const schema = Yup.object({
            email: Yup.string().required().email(),
            password: Yup.string().required(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'you miss something' })
        }

        const { email, password } = req.body

        const user = await User.findOne({ where: { email } })


        if (!user) {
            return res.status(401).json({ message: 'user not found' })
        }

        if (!(await user.checkPassword(password))) {
            return res.status(400).json({ message: 'something went wrong' })
        }

        return res.json({
            id: user.id,
            name: user.name,
            admins: user.admins,
            token: JWT.sign({ id: user.id, name: user.name }, auths.secret, {
                expiresIn: auths.expiresIn,
            }),
            position: user.position_in_company
        })

    }

    async index(req, res) {
        const login = await User.findAll()
        return res.status(200).json({ 'todos os usuarios': login })
    }



}

module.exports = new SessionsLogin()