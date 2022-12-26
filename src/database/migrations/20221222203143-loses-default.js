'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('productions', 'lost_prod',
      {

        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 0
      },
    );

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('users');

  }
};
