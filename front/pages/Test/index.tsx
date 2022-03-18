import React, { useCallback } from 'react';
import io from 'socket.io-client';
import useSocket from '@hooks/useSocket';
const backUrl = 'http://localhost:3095';

const TestPage = () => {
  // const [socket, disconnect] = useSocket('test');

  // const goRoom1 = () => {
  //   console.log(socket);
  //   socket.emit('test', 'hello', (response: string) => {
  //     console.log(response);
  //   });
  //   console.log(socket);
  // };

  // const goRoom2 = () => {};

  return (
    <div>
      {/* <button onClick={goRoom1}>room1</button>
      <button onClick={goRoom2}>room2</button> */}
    </div>
  );
};

export default TestPage;
