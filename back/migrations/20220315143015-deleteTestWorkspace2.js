'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkDelete('workspaces', { id: 2 });
  },

  async down(queryInterface, Sequelize) {},
};
