const { Model, Sequelize } = require('sequelize')
const bCrypt = require('bcrypt')



class User extends Model {
    static init(sequelize) {
        super.init(
            {
                admins: Sequelize.BOOLEAN,
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password_hash: Sequelize.STRING,
                position_in_company: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
            },

            { sequelize, }

        )
        this.addHook('beforeSave', async (users) => {
            if (users.password) {
                users.password_hash = await bCrypt.hash(users.password, 1)
            }      //criptografia 
        })
        return this
    }

    checkPassword(password) {
        return bCrypt.compare(password, this.password_hash)
    }
}

module.exports = User

