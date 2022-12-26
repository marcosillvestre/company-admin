'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('productions', 'machine_id',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'machines', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('productions', 'machine_id');

  }
};
