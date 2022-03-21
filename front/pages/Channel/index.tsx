import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { Container, DragOver, Header } from './styles';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import fetcher from '@utils/fetcher';
import ChatBox from '@components/ChatBox';
import ChatList from '@components/ChatList';
import useInput from '@hooks/useInput';
import axios from 'axios';
import { IChannel, IDM, IUser } from '@typings/db';
import makeSection from '@utils/makeSections';
import useSocket from '@hooks/useSocket';
import { Scrollbars } from 'react-custom-scrollbars-2';
import InviteChannelModal from '@components/InviteChannelModal';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { backUrl } from '../../config';
const Channel = () => {
  const { workspace, channel } = useParams<{ workspace: string; channel: string }>();

  const { data: myData } = useSWR(`${backUrl}/api/users`, fetcher);
  const { data: channelData } = useSWR<IChannel[]>(`${backUrl}/api/workspaces/${workspace}/channels`, fetcher);

  const {
    data: chatData,
    mutate: mutateChat,
    setSize,
  } = useSWRInfinite<IDM[]>(
    (index) => `${backUrl}/api/workspaces/${workspace}/channels/${channel}/chats?perPage=20&page=${index + 1}`,
    fetcher,
  );

  console.log(chatData);

  const { data: channelMembersData } = useSWR<any>(
    myData ? `${backUrl}/api/workspaces/${workspace}/channels/${channel}/members` : null,
    fetcher,
  );
  const [socket] = useSocket(workspace);
  const [chat, onChangeChat, setChat] = useInput('');
  const [showInviteChannelModal, setShowInviteChannelModal] = useState(false);
  const [onDrageOver, setOnDragOver] = useState(false);
  const scrollbarRef = useRef<Scrollbars>(null);

  const isEmpty = chatData?.[0]?.length === 0; //데이터가 더이상 없는가?
  const isReachingEnd = isEmpty || (chatData && chatData[chatData.length - 1]?.length < 20); //마지막 페이지인가?

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();

      if (chat?.trim()) {
        axios
          .post(`${backUrl}/api/workspaces/${workspace}/channels/${channel}/chats`, {
            content: chat,
          })
          .then(() => {
            mutateChat();
            setChat('');
            localStorage.setItem(`${workspace}-${channel}`, new Date().getTime().toString());
            setTimeout(() => {
              scrollbarRef.current?.scrollToBottom();
            }, 100);
          })
          .catch(console.error);
      }
    },
    [chat],
  );

  useEffect(() => {
    localStorage.setItem(`${workspace}-${channel}`, new Date().getTime().toString());
  }, [workspace, channel]);

  const onMessage = useCallback(
    (data: any) => {
      mutateChat((chatData) => {
        chatData?.[0].push(data);
        localStorage.setItem(`${workspace}-${channel}`, new Date().getTime().toString());
        return chatData;
      }, false).then(() => {
        toast.success('새 메시지가 도착했습니다.', {
          onClick() {
            scrollbarRef.current?.scrollToBottom();
          },
          closeOnClick: true,
        });
      });
    },
    [myData, mutateChat],
  );

  useEffect(() => {
    // on에선 이벤트 이름, callback 함수
    socket?.on('chat', onMessage);
    return () => {
      socket?.off('chat', onMessage);
    };
  }, [socket, onMessage]);

  useEffect(() => {
    if (chatData?.length === 1) {
      scrollbarRef.current?.scrollToBottom();
    }
  }, [chatData]);

  const chatSections = makeSection(chatData ? ([] as IDM[]).concat(...chatData).reverse() : []);

  const onClickInviteChannel = useCallback(() => {
    setShowInviteChannelModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setShowInviteChannelModal(false);
  }, []);

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();

      const formData = new FormData();
      //browser마다 items나 files에 담김
      if (e.dataTransfer.items) {
        // dataTransfer.items에 담긴경우
        for (let i = 0; i < e.dataTransfer.items.length; i++) {
          if (e.dataTransfer.items[i].kind === 'file') {
            const file = e.dataTransfer.items[i].getAsFile();
            formData.append('image', file);
          }
        }
      } else {
        // dataTransfer.files에 담긴경우
        for (let i = 0; i < e.dataTransfer.files.length; i++) {
          formData.append('image', e.dataTransfer.files[i]);
        }
      }
      axios.post(`${backUrl}/api/workspaces/${workspace}/channels/${channel}/images`, formData).then(() => {
        setOnDragOver(false);
        localStorage.setItem(`${workspace}-${channel}`, new Date().getTime().toString());
      });
    },
    [workspace, channel],
  );

  const onDragOver = useCallback((e) => {
    console.log('드래그중');
    e.preventDefault();
    setOnDragOver(true);
  }, []);

  if (!channelData || !myData) {
    return null;
  }

  return (
    <Container onDragOver={onDragOver} onDrop={onDrop}>
      <Header>
        <span>#{channel}</span>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <span>{channelMembersData && channelMembersData[0].Members.length}</span>
          <BsFillPersonPlusFill onClick={onClickInviteChannel} style={{ marginLeft: '5px' }} />
        </div>
      </Header>
      <ChatList
        chatData={chatSections}
        scrollbarRef={scrollbarRef}
        isReachingEnd={isReachingEnd}
        isEmpty={isEmpty}
        setSize={setSize}
      />
      <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
      <InviteChannelModal
        show={showInviteChannelModal}
        onCloseModal={onCloseModal}
        setShowInviteChannelModal={setShowInviteChannelModal}
      />
      <ToastContainer position="bottom-center" limit={1} />
      {onDrageOver && <DragOver>업로드!</DragOver>}
    </Container>
  );
};

export default Channel;
