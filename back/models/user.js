const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: true,
        },
        nickname: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        modelName: 'User',
        tableName: 'users',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      },
    );
  }
  static associate(db) {
    db.User.hasMany(db.Workspace, { as: 'Owned', foreignKey: 'OwnerId' });
    db.User.belongsToMany(db.Workspace, {
      through: db.WorkspaceMember,
      as: 'Workspaces',
    });
    db.User.belongsToMany(db.Channel, { through: 'ChannelMembers' });
    db.User.hasMany(db.ChannelChat);
  }
};
