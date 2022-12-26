'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('productions', 'machine');

  },

  async down(queryInterface,) {
    await queryInterface.addColumn('productins', 'machine', {
      machine: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });

  }
};
