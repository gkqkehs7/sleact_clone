'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn('users', 'test', Sequelize.STRING);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn('users', 'test');
  },
};
