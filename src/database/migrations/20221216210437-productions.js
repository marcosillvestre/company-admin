'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productions',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        machine: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        prod_per_hour: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lost_prod: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        operator: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        total_prod: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,

        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }


      });

  },

  async down(queryInterface) {
    await queryInterface.dropTable('productions');

  }
};
