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
const csp = require('helmet-csp');

const useSocket = require('./socket');
const passportConfig = require('./passport');
const db = require('./models');
const dotenv = require('dotenv');
const userRouter = require('./router/user');
const workspaceRouter = require('./router/workspace');
dotenv.config();
const app = express();
const httpServer = createServer(app);

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
  app.use(
    csp({
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'"],
        scriptSrc: ["'self'"],
      },
    }),
  );
} else {
  app.use(
    cors({
      origin: true,
      credentials: true,
    }),
  );
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

passportConfig();
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cookieParser('nodeasdf'));

const sessionOption = {
  resave: false,
  saveUninitialized: false,
  secret: 'nodeasdf',
  cookie: {
    httpOnly: true,
  },
};
app.use(session(sessionOption));
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === 'production') {
  sessionOption.cookie.secure = true;
  sessionOption.cookie.proxy = true;
}

app.use('/api/users', userRouter);
app.use('/api/workspaces', workspaceRouter);
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

useSocket(httpServer, app);
httpServer.listen(80);
