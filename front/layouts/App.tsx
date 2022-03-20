import React, { Suspense } from 'react';
import loadable from '@loadable/component';

import { Switch, Route, Redirect } from 'react-router-dom';

const Workspace = loadable(() => import('@layouts/Workspace'));
const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));

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

// return (
//   <Switch>
//     <Suspense fallback={<h1>loading</h1>}>
//       <Redirect exact path="/" to="login" />
//     </Suspense>

//     <Suspense fallback={<h1>loading</h1>}>
//       <Route path="/login" component={LogIn} />
//     </Suspense>

//     <Suspense fallback={<h1>loading</h1>}>
//       <Route path="/signup" component={SignUp} />
//     </Suspense>

//     <Suspense fallback={<h1>loading</h1>}>
//       <Route path="/workspace/:workspace" component={Workspace} />
//     </Suspense>
//   </Switch>
// );
export default App;
