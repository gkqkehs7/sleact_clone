const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const { createServer } = require('http');
const path = require('path');
const hpp = require('hpp');
const helmet = require('helmet');
const useSocket = require('./socket');

const passportConfig = require('./passport');
const db = require('./models');
const dotenv = require('dotenv');
const userRouter = require('./router/user');
const workspaceRouter = require('./router/workspace');
dotenv.config();
const app = express();
const httpServer = createServer(app);
const PORT = process.env.NODE_ENV === 'production' ? 80 : 3095;
const { redisClient } = require('./redis');
let RedisStore = require('connect-redis')(session);

//db설정
db.sequelize
  .sync()
  .then(() => {
    console.log('db연결 성공');
  })
  .catch(console.error);

//배포 관련 설정이다
if (process.env.NODE_ENV === 'production') {
  app.enable('trust proxy');
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(hpp());
} else {
  app.use(
    cors({
      origin: true,
      credentials: true,
    }),
  );
}

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

//front에서 온 정보 읽을 수 있게 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//사진 저장할곳 설정
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cookieParser('nodeasdf'));

//session설정 + redis
passportConfig();
redisClient.connect().catch(console.error);
const sessionOption = {
  resave: false,
  saveUninitialized: false,
  secret: 'nodeasdf',
  store: new RedisStore({ client: redisClient }),
};
app.use(session(sessionOption));
app.use(passport.initialize());
app.use(passport.session());

//dist파일 경로 설정
app.use('/api/users', userRouter);
app.use('/api/workspaces', workspaceRouter);
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

useSocket(httpServer, app);

httpServer.listen(PORT);
