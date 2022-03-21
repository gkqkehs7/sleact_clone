const passport = require('passport');
const local = require('./local');
const User = require('../models/user');
const Workspace = require('../models/workspace');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id); //처음 로그인시 user의 id로 쿠키만들기
    //아까랑 같이 서버에러 , 성공
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({
        where: { id },
        attributes: ['id', 'nickname', 'email'],
        include: [
          {
            model: Workspace,
            as: 'Workspaces',
          },
        ],
      });
      done(null, user);
    } catch (error) {
      console.error(error);
      done(error);
    }
  });
  local();
};
