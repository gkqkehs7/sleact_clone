import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { Container, DragOver, Header } from './styles';
import gravatar from 'gravatar';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import fetcher from '@utils/fetcher';
import ChatBox from '@components/ChatBox';
import ChatList from '@components/ChatList';
import useInput from '@hooks/useInput';
import axios from 'axios';
import { IDM } from '@typings/db';
import makeSection from '@utils/makeSections';
import useSocket from '@hooks/useSocket';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { backUrl } from '../../config';

const DirectMessage = () => {
  const { workspace, id } = useParams<{ workspace: string; id: string }>();
  const { data: userData } = useSWR(`${backUrl}/api/workspaces/${workspace}/members/${id}`, fetcher);
  const { data: myData } = useSWR(`${backUrl}/api/users`, fetcher);
  const {
    data: chatData,
    mutate: mutateChat,
    setSize,
  } = useSWRInfinite<IDM[]>(
    (index) => `${backUrl}/api/workspaces/${workspace}/dms/${id}/chats?perPage=20&page=${index + 1}`,
    fetcher,
  );

  const [onDrageOver, setOnDragOver] = useState(false);
  const [chat, onChangeChat, setChat] = useInput('');
  const scrollbarRef = useRef<Scrollbars>(null);

  //이제 데이터가 이차원 배열로 들어옴 [[3page] ,[2page], [1page]] 나중에 들어온게 앞으로 저장됨 그래서 [0].length===0 인지 확인하는거임
  const isEmpty = chatData?.[0]?.length === 0; //데이터가 더이상 없는가?
  const isReachingEnd = isEmpty || (chatData && chatData[chatData.length - 1]?.length < 20); //마지막 페이지인가?

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();

      if (chat?.trim()) {
        axios
          .post(`${backUrl}/api/workspaces/${workspace}/dms/${id}/chats`, {
            content: chat,
          })
          .then(() => {
            mutateChat();
            setChat('');
            localStorage.setItem(`${workspace}-${id}`, new Date().getTime().toString());
            setTimeout(() => {
              scrollbarRef.current?.scrollToBottom();
            }, 100);
          })
          .catch(console.error);
      }
    },
    [chat],
  );

  console.log(chatData);

  useEffect(() => {
    localStorage.setItem(`${workspace}-${id}`, new Date().getTime().toString());
  }, [workspace, id]);
  const [socket] = useSocket(workspace);

  //mutate(새로운값, false)
  //false하면 서버에 검사안함 true로 하면 기존 revalidate와 same
  //socket으로 데이터 가져왓으므로 mutate를 false로해서 두번 검사가 이루어지지 않기로 한다
  const onMessage = useCallback(
    (data: any) => {
      mutateChat((chatData) => {
        chatData?.[0].push(data);
        localStorage.setItem(`${workspace}-${id}`, new Date().getTime().toString());
        return chatData; //원래 값이 들어가야하는데 함수 들어갔으니 return 해주어야겟지?
      }, false).then(() => {
        toast.success('새 메시지가 도착했습니다.', {
          onClick() {
            scrollbarRef.current?.scrollToBottom();
          },
          closeOnClick: true,
        });
      });
    },
    [id, myData, mutateChat],
  );

  useEffect(() => {
    // on에선 이벤트 이름, callback 함수
    socket?.on('dm', onMessage);
    return () => {
      socket?.off('dm', onMessage);
    };
  }, [socket, onMessage]);

  useEffect(() => {
    if (chatData?.length === 1) {
      scrollbarRef.current?.scrollToBottom();
    }
  }, [chatData]);

  // 지금데이터가 [ [제일최근꺼~최근꺼] [오래된거~제일오래된거] ] 이런 순으로 되어있다.
  // 제일최근꺼가 밑에보이려면 배열을 reverse시켜서 위에서는 최근꺼 ~ 아래서 제일 최근꺼 순으로 보여주어야한다
  //reverse()하면 기존의 chat이 변경되기 때문에 기존의 chatData불변성 지키기

  const chatSections = makeSection(chatData ? ([] as IDM[]).concat(...chatData).reverse() : []);

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
      axios.post(`${backUrl}/api/workspaces/${workspace}/dms/${id}/images`, formData).then(() => {
        setOnDragOver(false);
        localStorage.setItem(`${workspace}-${id}`, new Date().getTime().toString());
      });
    },
    [workspace, id],
  );

  const onDragOver = useCallback((e) => {
    console.log('드래그중');
    e.preventDefault();
    setOnDragOver(true);
  }, []);

  if (!userData || !myData) {
    return null;
  }
  return (
    <Container onDragOver={onDragOver} onDrop={onDrop}>
      <Header>
        <img src={gravatar.url(userData.email, { s: '24px', d: 'retro' })} alt={userData.nickname} />
        <span>{userData.nickname}</span>
      </Header>
      <ChatList
        chatData={chatSections}
        scrollbarRef={scrollbarRef}
        isReachingEnd={isReachingEnd}
        isEmpty={isEmpty}
        setSize={setSize}
      />
      <ToastContainer position="bottom-center" limit={1} />
      <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
      {onDrageOver && <DragOver>업로드!</DragOver>}
    </Container>
  );
};

export default DirectMessage;
