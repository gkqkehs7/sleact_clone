const express = require('express');
const { Op } = require('sequelize');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const User = require('../models/user');
const Workspace = require('../models/workspace');
const Channel = require('../models/channel');
const DM = require('../models/dm');
const ChannelChat = require('../models/channelChat');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

var router = express.Router();

//workspace 생성
router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const exWorkspace = await Workspace.findOne({ where: { url: req.body.workspace } });

    if (exWorkspace) {
      return res.status(403).send('이미 사용중인 이름입니다');
    }
    const workspace = await Workspace.create({
      name: req.body.workspace,
      url: req.body.url,
    });

    const basicChannel = await Channel.create({ name: '일반' });
    await workspace.addChannels(basicChannel);
    await workspace.addMembers(req.user);
    return res.status(200).send('ok');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//channel 생성
router.post('/:workspace/channels', isLoggedIn, async (req, res, next) => {
  try {
    const exWorkspace = await Workspace.findOne({ where: { url: req.params.workspace } });
    if (!exWorkspace) {
      return res.status(403).send('존재하지 않는 워크스페이스 입니다');
    }

    const exChannel = await Channel.findOne({ where: { name: req.body.name, WorkspaceId: exWorkspace.id } });
    if (exChannel) {
      return res.status(403).send('이미 존재하는 채널입니다');
    }

    const channel = await Channel.create({
      name: req.body.name,
      WorkspaceId: exWorkspace.id,
    });

    await channel.addMembers(req.user);
    return res.status(200).send('ok');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//workspace의 채널들과 유저들 가져오기
router.get('/:workspace/channels', isLoggedIn, async (req, res, next) => {
  try {
    const exWorkspace = await Workspace.findOne({ where: { url: req.params.workspace } });
    if (!exWorkspace) {
      return res.status(403).send('존재하지 않는 워크스페이스 입니다');
    }

    const temp = await exWorkspace.getChannels({
      include: [
        {
          model: User,
          as: 'Members', //이거 프론트에 갖다줄때 이름임
          attributes: ['id'],
        },
      ],
    });

    return res.json(temp);
  } catch (error) {
    next(error);
  }
});

//workspace에 사용자 초대
router.post('/:workspace/members', isLoggedIn, async (req, res, next) => {
  try {
    const exWorkspace = await Workspace.findOne({ where: { url: req.params.workspace } });
    if (!exWorkspace) {
      return res.status(403).send('존재하지 않는 워크스페이스 입니다');
    }

    const exUser = await User.findOne({ where: { email: req.body.email } });
    if (!exUser) {
      return res.status(403).send('존재하지 않는 유저입니다');
    }

    //이미 workspace에 존재하는 유저인가
    const wUser = await exWorkspace.getMembers({ where: { id: exUser.id } });
    if (wUser.length !== 0) {
      return res.status(403).send('이미 workspace에 존재하는 유저입니다');
    }

    await exWorkspace.addMembers(exUser);
    await exWorkspace.Channels[0].addMembers(exUser);
    return res.status(201).send('ok');
  } catch (error) {
    next(error);
  }
});

//workspace 멤버들 가져오기
router.get('/:workspace/members', isLoggedIn, async (req, res, next) => {
  try {
    const exWorkspace = await Workspace.findOne({ where: { url: req.params.workspace } });
    if (!exWorkspace) {
      return res.status(403).send('존재하지 않는 워크스페이스 입니다');
    }

    const workspaceUsers = await exWorkspace.getMembers({
      attributes: ['id', 'nickname', 'email'],
    });
    return res.json(workspaceUsers);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/:workspace/members/:id', isLoggedIn, async (req, res, next) => {
  try {
    const exWorkspace = await Workspace.findOne({ where: { url: req.params.workspace } });
    if (!exWorkspace) {
      return res.status(403).send('존재하지 않는 워크스페이스 입니다');
    }

    const exUser = await User.findOne({
      where: { id: parseInt(req.params.id, 10) },
      attributes: ['id', 'nickname', 'email'],
    });
    if (!exUser) {
      return res.status(403).send('존재하지 않는 유저입니다');
    }

    const wUser = await exWorkspace.getMembers({ where: { id: exUser.id } });
    if (wUser.length === 0) {
      return res.status(403).send('워크스페이스에 존재하지 않는 유저입니다');
    }
    return res.json(exUser);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/:workspace/channels/:channel/members', isLoggedIn, async (req, res, next) => {
  try {
    const exWorkspace = await Workspace.findOne({ where: { url: req.params.workspace } });
    if (!exWorkspace) {
      return res.status(403).send('존재하지 않는 워크스페이스 입니다');
    }

    const exChannel = await exWorkspace.getChannels({
      where: { name: req.params.channel },
      include: [
        {
          model: User,
          attributes: ['id', 'nickname', 'email'],
          as: 'Members',
        },
      ],
    });
    if (!exChannel) {
      return res.status(403).send('존재하지 않는 채널 입니다');
    }

    return res.send(exChannel);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//채팅 보내기 왜 받을때 말고 post일때 socket을 쓰는지 아는가?
router.post('/:workspace/dms/:id/chats', isLoggedIn, async (req, res, next) => {
  try {
    const exWorkspace = await Workspace.findOne({ where: { url: req.params.workspace } });
    if (!exWorkspace) {
      return res.status(403).send('존재하지 않는 워크스페이스 입니다');
    }

    const exUser = await User.findOne({ where: { id: parseInt(req.params.id, 10) } });
    if (!exUser) {
      return res.status(403).send('존재하지 않는 유저입니다');
    }

    const newDM = await DM.create({
      content: req.body.content,
      WorkspaceId: exWorkspace.id,
      SenderId: req.user.id,
      ReceiverId: exUser.id,
    });

    const io = req.app.get('io');
    const onlineMap = req.app.get('onlineMap');
    // 받을 사람의 socket id를 먼저 알아내야한다!
    // 현재 workspace의 참여자들의 socket id가 적혀있는 객체 { QLza0L2phPttSUF0AAAD: 5, wQzEi5pGX0F4MCCwAAAF: 7 }
    const workspaceMembers = onlineMap[`/ws-${exWorkspace.url}`];

    //Object.keys(객체)는 객체의 key들을 배열로 반환 -> 그 다음 그 배열로 find 하기
    const receiverSocketId = Object.keys(workspaceMembers).find((key) => workspaceMembers[key] === exUser.id);

    const dmWithSender = await DM.findOne({
      where: { id: newDM.id },
      include: [
        {
          model: User,
          as: 'Sender',
        },
      ],
    });
    io.of(`/ws-${exWorkspace.url}`).to(receiverSocketId).emit('dm', dmWithSender);

    console.log(dmWithSender);
    return res.json('ok');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//채팅가져오기
router.get('/:workspace/dms/:id/chats', isLoggedIn, async (req, res, next) => {
  try {
    const exWorkspace = await Workspace.findOne({ where: { url: req.params.workspace } });
    if (!exWorkspace) {
      return res.status(403).send('존재하지 않는 워크스페이스 입니다');
    }

    const exUser = await User.findOne({ where: { id: parseInt(req.params.id, 10) } });
    if (!exUser) {
      return res.status(403).send('존재하지 않는 유저입니다');
    }

    //op.or 쓰기 연산자다
    const chats = await exWorkspace.getDMs({
      where: {
        [Op.or]: [
          {
            SenderId: req.user.id,
            ReceiverId: req.params.id,
          },
          {
            SenderId: req.params.id,
            ReceiverId: req.user.id,
          },
        ],
      },
      include: [
        {
          model: User,
          as: 'Sender',
          attributes: ['nickname', 'id', 'email'],
        },
        {
          model: User,
          as: 'Receiver',
          attributes: ['nickname', 'id', 'email'],
        },
      ],
      order: [['createdAt', 'DESC']],
      limit: parseInt(req.query.perPage, 10), //limit개 가져와라
      offset: req.query.perPage * (req.query.page - 1), //offset부터
    });

    // 위처럼 하면 더 빠르겠찌?
    // const chats = await DM.findAll({
    //   where: {
    //     WorkspaceId: exWorkspace.id,
    //     SenderId: req.user.id,
    //     ReceiverId: exUser.id,
    //   },
    // });
    // console.log('chats', chats);

    return res.json(chats);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//안읽은 dm 가져오기
router.get('/:workspace/dms/:memberId/unreads', isLoggedIn, async (req, res, next) => {
  try {
    const exWorkspace = await Workspace.findOne({ where: { url: req.params.workspace } });
    if (!exWorkspace) {
      return res.status(403).send('존재하지 않는 워크스페이스 입니다');
    }

    const unreadDMs = await DM.count({
      where: {
        WorkspaceId: exWorkspace.id,
        SenderId: req.params.memberId,
        ReceiverId: req.user.id,
        createdAt: {
          [Op.gt]: new Date(+req.query.after),
        },
      },
    });
    res.json(unreadDMs);
  } catch (error) {
    next(error);
    console.log(error);
  }
});

//채널에서 채팅하기
router.post('/:workspace/channels/:channel/chats', isLoggedIn, async (req, res, next) => {
  try {
    const exWorkspace = await Workspace.findOne({ where: { url: req.params.workspace } });
    if (!exWorkspace) {
      return res.status(403).send('존재하지 않는 워크스페이스 입니다');
    }

    //get으로 가져오면 배열에 담기는거 기억하렴
    const exChannel = await exWorkspace.getChannels({ where: { name: req.params.channel } });
    if (!exChannel) {
      return res.status(403).send('존재하지 않는 채널입니다');
    }
    const newChat = await ChannelChat.create({
      content: req.body.content,
      ChannelId: exChannel[0].id,
      UserId: req.user.id,
    });

    const chatWithSender = await ChannelChat.findOne({
      where: { id: newChat.id },
      include: [
        {
          model: User,
          attributes: ['nickname', 'id', 'email'],
        },
      ],
    });

    const io = req.app.get('io');
    io.of(`/ws-${exWorkspace.url}`).to(`/ws-${exWorkspace.url}-${exChannel[0].id}`).emit('chat', chatWithSender);

    console.log(`/${exWorkspace.url}-${exChannel[0].id}`);
    return res.json('ok');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/:workspace/channels/:channelName/unreads', isLoggedIn, async (req, res, next) => {
  try {
    const exWorkspace = await Workspace.findOne({ where: { url: req.params.workspace } });
    if (!exWorkspace) {
      return res.status(403).send('존재하지 않는 워크스페이스 입니다');
    }

    const exChannel = await exWorkspace.getChannels({ where: { name: req.params.channelName } });
    if (!exChannel) {
      return res.status(403).send('존재하지 않는 채널입니다');
    }

    const unreadChats = await ChannelChat.count({
      where: {
        channelId: exChannel[0].id,
        createdAt: {
          [Op.gt]: new Date(+req.query.after),
        },
      },
    });
    res.json(unreadChats);
  } catch (error) {
    next(error);
    console.log(error);
  }
});

router.get('/:workspace/channels/:channel/chats', isLoggedIn, async (req, res, next) => {
  try {
    const exWorkspace = await Workspace.findOne({ where: { url: req.params.workspace } });
    if (!exWorkspace) {
      return res.status(403).send('존재하지 않는 워크스페이스 입니다');
    }

    const exChannel = await exWorkspace.getChannels({ where: { name: req.params.channel } });
    if (!exChannel) {
      return res.status(403).send('존재하지 않는 채널입니다');
    }
    const ChannelChats = await exChannel[0].getChats({
      include: [
        {
          model: User,
          attributes: ['nickname', 'id', 'email'],
        },
      ],
      order: [['createdAt', 'DESC']],
      limit: parseInt(req.query.perPage, 10), //limit개 가져와라
      offset: req.query.perPage * (req.query.page - 1), //offset부터
    });

    return res.json(ChannelChats);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//uploads파일 만들기
try {
  fs.readdirSync('uploads');
} catch (error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      //파일 저장하는 곳
      cb(null, 'uploads/');
    },
    filename(req, file, cb) {
      //extname 이미지.png -> .png 확장자 추출
      //basename 이미지.png -> 이미지 파일이름 추출
      //최종 이미지.png -> 이미지20220304.png
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

//images업로드 - chat
router.post('/:workspace/channels/:channelName/images', isLoggedIn, upload.array('image'), async (req, res, next) => {
  try {
    const exWorkspace = await Workspace.findOne({ where: { url: req.params.workspace } });
    if (!exWorkspace) {
      return res.status(403).send('존재하지 않는 워크스페이스 입니다');
    }

    const exChannel = await exWorkspace.getChannels({ where: { name: req.params.channelName } });
    if (!exChannel) {
      return res.status(403).send('존재하지 않는 채널입니다');
    }

    console.log(req.files);
    const chat = await ChannelChat.create({
      UserId: req.user.id,
      ChannelId: exChannel[0].id,
      content: req.files[0].path,
    });

    const chatWithUser = await ChannelChat.findOne({
      where: { id: chat.id },
      include: [
        {
          model: User,
        },
        {
          model: Channel,
        },
      ],
    });
    const io = req.app.get('io');
    io.of(`/ws-${exWorkspace.url}`).to(`/ws-${exWorkspace.url}-${exChannel[0].id}`).emit('chat', chatWithUser);

    res.send('ok');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//images업로드 - dms
router.post('/:workspace/dms/:id/images', isLoggedIn, upload.array('image'), async (req, res, next) => {
  try {
    const exWorkspace = await Workspace.findOne({ where: { url: req.params.workspace } });
    if (!exWorkspace) {
      return res.status(403).send('존재하지 않는 워크스페이스 입니다');
    }

    const exUser = await exWorkspace.getMembers({ where: { id: parseInt(req.params.id, 10) } });
    if (!exUser) {
      return res.status(403).send('존재하지 않는 유저입니다');
    }

    const newDM = await DM.create({
      UserId: req.user.id,
      WorkspaceId: exWorkspace.id,
      SenderId: req.user.id,
      ReceiverId: exUser[0].id,
      content: req.files[0].path,
    });

    const dmWithSender = await DM.findOne({
      where: { id: newDM.id },
      include: [
        {
          model: User,
          as: 'Sender',
        },
      ],
    });

    const io = req.app.get('io');
    const onlineMap = req.app.get('onlineMap');
    const workspaceMembers = onlineMap[`/ws-${exWorkspace.url}`];
    const receiverSocketId = Object.keys(workspaceMembers).find((key) => workspaceMembers[key] === exUser.id);
    io.of(`/ws-${exWorkspace.url}`).to(receiverSocketId).emit('dm', dmWithSender);

    res.send('ok');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
