import { useCallback } from 'react';
import io from 'socket.io-client';
import { backUrl } from '../config';

const sockets: { [key: string]: any } = {};

const useSocket = (workspace?: string) => {
  const disconnect = useCallback(() => {
    if (workspace && sockets[workspace]) {
      sockets[workspace].on('disconnect', () => {
        delete sockets[workspace];
      });
    }
  }, [workspace]);

  if (!workspace) {
    //workspace가 존재하지 않을때
    return [undefined, disconnect];
  }

  if (!sockets[workspace]) {
    sockets[workspace] = io(`${backUrl}/ws-${workspace}`);
    sockets[workspace].on('connect', (socket: any) => {
      console.log(socket);
    });
  }

  return [sockets[workspace], disconnect];
};

export default useSocket;
