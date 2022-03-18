const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const User = require('../models/user');

//done하면 router의 err, user, info로 parameter담겨서 이동한다
//done의 파라미터는 서버에러, 성공, client에러 이다
module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email', //req
        passwordField: 'password',
      },
      async (email, password, done) => {
        try {
          //await 구문엔 try를 써주자
          const user = await User.findOne({
            where: { email },
          });
          if (!user) {
            return done(null, false, { reason: '존재하지 않는 유저입니다' }); //서버에러없음, 로그인실패, 클라이언트에러있음
          }
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            return done(null, user); //서버에러없음, 로그인성공
          }
          return done(null, false, { reason: '비밀번호가 틀렸습니다' }); //서버에러없음, 로그인실패, 클라이언트에러있음
        } catch (error) {
          console.error(error);
          return done(error); //서버에러
        }
      },
    ),
  );
};
