const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Workspace extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(30),
          unique: true,
          allowNull: false,
        },
        url: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        modelName: 'Workspace',
        tableName: 'Workspaces',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      },
    );
  }
  static associate(db) {
    db.Workspace.belongsTo(db.User, { as: 'Owned', foreignKey: 'OwnerId' });
    db.Workspace.belongsToMany(db.User, { through: db.WorkspaceMember, as: 'Members' });
    db.Workspace.hasMany(db.Channel);
    db.Workspace.hasMany(db.DM);
  }
};
