const Production = require('../models/Production')
const Yup = require('yup')
const { v4 } = require('uuid')

class ProductionController {


    async store(req, res) {
        const schema = Yup.object({
            machine_id: Yup.number().required(),
            prod_per_hour: Yup.number().required(),
            lost_prod: Yup.number().required(),
            operator: Yup.string().required(),
            total_prod: Yup.number(),
        })
        try {
            await schema.validateSync(req.body, { abortEarly: false })
        } catch (err) {
            return res.status(400).json(err)
        }

        const { machine_id, prod_per_hour, lost_prod, total_prod, operator } = req.body

        const prod = await Production.create({
            machine_id,
            prod_per_hour,
            lost_prod,
            total_prod,
            operator,
        })
        return res.json(prod)


    } //chartjs graficos

    async index(req, res) {
        const prod = await Production.findAll()
        return res.status(200).json(prod)


    }


}

module.exports = new ProductionController()