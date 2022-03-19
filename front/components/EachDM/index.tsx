import { IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import React, { useEffect, VFC } from 'react';
import { useParams } from 'react-router';
import { NavLink, useLocation } from 'react-router-dom';
import useSWR from 'swr';
import styled from '@emotion/styled';
import { backUrl } from '../../config';

interface Props {
  member: IUser;
  isOnline: boolean;
}
const EachDM: VFC<Props> = ({ member, isOnline }) => {
  const { workspace } = useParams<{ workspace?: string }>();
  const location = useLocation();
  const { data: userData } = useSWR<IUser>(`${backUrl}/api/users`, fetcher, {
    dedupingInterval: 2000, // 2초
  });
  const date = localStorage.getItem(`${workspace}-${member.id}`) || 0;
  const { data: count, mutate: countMutate } = useSWR<number>(
    userData ? `${backUrl}/api/workspaces/${workspace}/dms/${member.id}/unreads?after=${date}` : null,
    fetcher,
  );

  useEffect(() => {
    if (location.pathname === `/workspace/${workspace}/dm/${member.id}`) {
      countMutate(0);
    }
  }, [countMutate, location.pathname, workspace, member]);

  return (
    // Link의 activeClassName은 지금 주소와 누를 주소가 같을때 발동
    <NavLink key={member.id} activeClassName="selected" to={`/workspace/${workspace}/dm/${member.id}`}>
      {isOnline ? <Online /> : <Offline />}
      <span className={count && count > 0 ? 'bold' : undefined}>{member.nickname}</span>
      {member.id === userData?.id && <span> (나)</span>}
      {(count && count > 0 && <span className="count">{count}</span>) || null}
    </NavLink>
  );
};

const Online = styled.div`
  width: 10px;
  height: 10px;
  border: solid;
  border-width: 1px;
  border-radius: 10px;
  margin-right: 2px;
  background-color: green;
`;

const Offline = styled.div`
  width: 10px;
  height: 10px;
  border: solid;
  border-width: 1px;
  border-radius: 10px;
  margin-right: 2px;
`;

export default EachDM;
