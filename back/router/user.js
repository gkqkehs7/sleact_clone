const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const User = require('../models/user');
const Workspace = require('../models/workspace');
const Channel = require('../models/channel');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const redis = require('redis');

var router = express.Router();

router.get('/', (req, res, next) => {
  return res.json(req.user || false);
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      //서버 에러인 경우 next에게 넘김
      console.error(err);
      return next(err);
    }
    if (info) {
      //client에러인 경우 이유를 보내줌
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginError) => {
      //모두 통과했다면 passport에서 마지막 로그인
      //passport에서 로그인 에러발생했을 시 next에게 위임

      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      //req.login은 index.js의 serializeuser실행
      //이떄부터 req.user에 유저 정보가 담긴다
      console.log('로그인 성공!');

      const redisClient = new redis.createClient();
      await redisClient.connect();
      await redisClient.SET('test', 'test');

      return res.status(200).send('로그인 성공');
    });
  })(req, res, next);
});

router.post('/', isNotLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    // 서버에러, 성공, client에러
    // 항상 await같은건 try로 감싸준다
    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디 입니다');
    }

    const exNickname = await User.findOne({
      where: {
        nickname: req.body.nickname,
      },
    });

    if (exNickname) {
      return res.status(403).send('이미 사용중인 닉네임 입니다');
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const user = await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });

    const sleact = await Workspace.findOne({ where: { id: 1 } });
    const channel = await Channel.findOne({ where: { id: 1 } });
    await sleact.addMembers(user);
    await channel.addMembers(user);
    console.log('db에 저장 성공!');
    return res.status(201).send('ok');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});
module.exports = router;
