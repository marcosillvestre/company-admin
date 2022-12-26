const { Model, Sequelize } = require('sequelize')

class Machines extends Model {
    static init(sequelize) {
        super.init(
            {
                machine: Sequelize.STRING,
            },

            { sequelize, }

        )
        return this
    }

}

module.exports = Machines