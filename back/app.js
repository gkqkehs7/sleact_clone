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

const app = express();
const httpServer = createServer(app);
dotenv.config();
//배포 관련 설정이다
if (process.env.NODE_ENV === 'production') {
  app.use(hpp());
  app.use(helmet());
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: ['http://localhost:3090', 'sleactminu.com'],
    credentials: true,
  }),
);

passportConfig();
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cookieParser('nodeasdf'));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: 'nodeasdf',
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/users', userRouter);
app.use('/api/workspaces', workspaceRouter);

db.sequelize
  .sync()
  .then(() => {
    console.log('db연결 성공');
  })
  .catch(console.error);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

useSocket(httpServer, app);
httpServer.listen(80);
