module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        email: 'gkqkehs10@naver.com',
        nickname: '관리자',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('Workspaces', [
      {
        id: 1,
        name: 'Sleact',
        url: 'sleact',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('channels', [
      {
        id: 1,
        name: '일반',
        private: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkspaceId: 1,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
