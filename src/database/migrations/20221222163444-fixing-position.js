'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'position_in_company',
      {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "operador/auxiliar"
      },
    );

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('users');

  }
};
