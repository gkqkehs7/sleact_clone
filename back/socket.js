const { Server } = require('socket.io');

const onlineMap = {};
const redis = require('redis');
module.exports = (server, app) => {
  const io = new Server(server, {
    cors: {
      origin: ['http://localhost:3090'],
    },
  });
  //express의 전역변수 사용하는법 app.set app.get 이거 실제 서비스에선 redis 사용해야한다
  app.set('io', io);
  app.set('onlineMap', onlineMap);

  const workspace = io.of(/^\/ws-.+$/);
  workspace.on('connect', async (socket) => {
    const redisClient = new redis.createClient();
    await redisClient.connect();
    const newNamespace = socket.nsp;

    if (!onlineMap[newNamespace.name]) {
      //namespace없으면 만들기
      onlineMap[newNamespace.name] = {};
    }

    socket.on('login', ({ id, channelId }) => {
      onlineMap[newNamespace.name][socket.id] = id; //namespace입장
      //room 입장
      channelId.forEach((channelId) => {
        const roomName = `${newNamespace.name}-${channelId}`;
        console.log('socket:', roomName);
        socket.join(roomName);
      });

      //이렇게 보내면 { ASODKFAEWFJG: 3 } 이렇게 감
      //객체에서 값들을 배열로 얻는법
      // redisClient.SET('USERS', onlineMap);
      newNamespace.emit('onlineList', Object.values(onlineMap[newNamespace.name]));
    });

    socket.on('disconnect', () => {
      delete onlineMap[socket.nsp.name][socket.id];

      console.log(onlineMap[newNamespace.name]);

      newNamespace.emit('onlineList', Object.values(onlineMap[newNamespace.name]));
    });
  });

  // workspace.on('disconnect');
};
