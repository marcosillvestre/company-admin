'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('productions', 'total_prod',
      {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      });

  },

  async down(queryInterface) {
    await queryInterface.changeColumn('productions', 'total_prod');

  }
};
