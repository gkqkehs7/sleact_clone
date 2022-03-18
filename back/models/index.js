const Sequelize = require('sequelize');

const workspace = require('./workspace');
const channel = require('./channel');
const channelChat = require('./channelChat');
const dm = require('./dm');
const user = require('./user');
const workspaceMember = require('./workspaceMember');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

sequelize
  .query('SHOW Tables', {
    type: sequelize.QueryTypes.SHOWTABLES,
  })
  .then((result) => {
    console.log(result);
  });

db.Workspace = workspace;
db.Channel = channel;
db.ChannelChat = channelChat;
db.DM = dm;
db.User = user;
db.WorkspaceMember = workspaceMember;

Object.keys(db).forEach((modelName) => {
  db[modelName].init(sequelize);
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
