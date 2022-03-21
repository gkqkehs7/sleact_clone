const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class ChannelChat extends Model {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        modelName: 'ChannelChat',
        tableName: 'channelChats',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      },
    );
  }

  static associate(db) {
    db.ChannelChat.belongsTo(db.User);
    db.ChannelChat.belongsTo(db.Channel);
  }
};
