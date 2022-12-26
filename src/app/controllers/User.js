const User = require('../models/User')
const Yup = require('yup')
const { v4 } = require('uuid')


class UserController {

    async store(req, res) {
        const schema =
            Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string().email().required(),
                password: Yup.string().required().min(6),
                position_in_company: Yup.string(),
                admins: Yup.boolean(),
            })
        try {
            await schema.validateSync(req.body, { abortEarly: false })
        } catch (err) {
            return res.status(400).json(err)
        }

        const { name, email, password, admins, position_in_company } = req.body

        const userExists = await User.findOne({ where: { email } })

        if (userExists) {
            return res.status(409).json({ message: 'this email already used' })
        }


        const user = await User.create({
            id: v4(),
            name,
            email,
            password,
            admins,
            position_in_company,
        })

        return res.status(201).json({ id: user.id, name, email, position_in_company })

    }

    async index(req, res) {
        const user = await User.findAll()
        return res.status(200).json(user)
    }

}

module.exports = new UserController()