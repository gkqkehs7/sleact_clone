import { ChatZone, Section, StickyHeader } from './styles';
import React, { RefObject, useCallback, useRef, VFC } from 'react';
import { IDM, IChat } from '@typings/db';
import Chat from '@components/Chat';
import { Scrollbars } from 'react-custom-scrollbars-2';

interface Props {
  chatData: { [key: string]: (IDM | IChat)[] };
  scrollbarRef: RefObject<Scrollbars>;
  isReachingEnd?: boolean;
  isEmpty: boolean;
  setSize: (f: (size: number) => number) => Promise<(IDM | IChat)[][] | undefined>;
}
const ChatList: VFC<Props> = ({ scrollbarRef, isReachingEnd, isEmpty, chatData, setSize }) => {
  const onScroll = useCallback(
    (values) => {
      // 맨 위에 도달 하였고,           마지막 페이지가 아니고  데이터가 끝이 아닐때
      if (values.scrollTop === 0 && !isReachingEnd && !isEmpty) {
        setSize((size) => size + 1).then(() => {
          scrollbarRef.current?.scrollTop(scrollbarRef.current?.getScrollHeight() - values.scrollHeight);
        });
      }
    },
    [scrollbarRef],
  );

  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onScroll}>
        {Object.entries(chatData).map(([date, chats]) => {
          //객체의 반복문은 Objects.entries로 한다
          return (
            <Section className={`section-${date}`} key={date}>
              <StickyHeader>
                <button>{date}</button>
              </StickyHeader>
              {chats.map((chat) => (
                <Chat key={chat.id} data={chat} />
              ))}
            </Section>
          );
        })}
      </Scrollbars>
    </ChatZone>
  );
};

export default ChatList;
