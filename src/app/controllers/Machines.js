const Machines = require('../models/Machines')
const Yup = require('yup')


class MachineController {


    async store(req, res) {
        const schema = Yup.object({
            machine: Yup.string().required(),
        })
        try {
            await schema.validateSync(req.body, { abortEarly: false })
        } catch (err) {
            return res.status(400).json(err)
        }

        const { machine } = req.body

        const machineExists = await Machines.findOne({ where: { machine } })

        if (machineExists) {
            return res.status(400).json({ message: 'this machine already exists' })
        }

        const { id } = await Machines.create({

            machine

        })
        return res.json({ machine, id })


    } //chartjs graficos

    async index(req, res) {
        const machine = await Machines.findAll()
        return res.status(200).json(machine)


    }


}

module.exports = new MachineController()

