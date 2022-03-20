import React from 'react';
import loadable from '@loadable/component';
import { retryLazy } from '@utils/lazyUtils';
import { Switch, Route, Redirect } from 'react-router-dom';

const Workspace = retryLazy(() => import('@layouts/Workspace'));
const LogIn = retryLazy(() => import('@pages/LogIn'));
const SignUp = retryLazy(() => import('@pages/SignUp'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/workspace/:workspace" component={Workspace} />
    </Switch>
  );
};

export default App;
