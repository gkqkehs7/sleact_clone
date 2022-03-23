import useInput from '@hooks/useInput';
import { Button, Error, Form, Header, Input, Label, Link } from '@pages/SignUp/styles';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { Redirect } from 'react-router-dom';
import useSWR from 'swr';

import { backUrl } from '../../config';

console.log(backUrl);
const LogIn = () => {
  const {
    data: userData,
    error,
    mutate,
  } = useSWR(`${backUrl}/api/users`, fetcher, {
    dedupingInterval: 1000000, //dedupingInterval내에는 cache에서 불러온다
  });
  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [errorMsg, onErrorMsg] = useState('');
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLogInError(false);
      axios
        .post(
          `${backUrl}/api/users/login`,
          { email, password },
          {
            withCredentials: true,
          },
        )
        .then((response) => {
          console.log(response);
          mutate();
        })
        .catch((error) => {
          onErrorMsg(error.response.data);
          setLogInError(true);
        });
    },
    [email, password, mutate],
  );

  if (!error && userData) {
    return <Redirect to="/workspace/sleact/channel/일반" />;
  }

  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
          {logInError && <Error>{errorMsg}</Error>}
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <Link>
        아직 회원이 아니신가요?&nbsp;
        <a href="/signup">회원가입 하러가기</a>
      </Link>
    </div>
  );
};

export default LogIn;
