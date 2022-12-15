const { Model, Sequelize } = require('sequelize')

class Sessions extends Model {
    static init(sequelize) {
        super.init(
            {
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
            },

            { sequelize, }

        )
    }

}

module.exports = Sessions