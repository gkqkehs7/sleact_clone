'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkDelete('users', { id: 1 });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
