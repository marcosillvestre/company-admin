const { Model, Sequelize } = require('sequelize')

class Production extends Model {
    static init(sequelize) {
        super.init(
            {
                prod_per_hour: Sequelize.STRING,
                lost_prod: Sequelize.STRING,
                operator: Sequelize.STRING,
                total_prod: Sequelize.STRING,
            },

            { sequelize, },

        )
        return this
    }
    static associate(models) {
        this.belongsTo(models.Machines, { foreignKey: 'machine_id', as: 'machine', })
    }

}

module.exports = Production