import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SignIn from './components/screen/SignIn';
import Register from './components/screen/SignUp';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" >
          <Scene key="SignIn" component={SignIn} title="SignIn"  />
          <Scene key="Register" component={Register} title="SignUp" initial />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
