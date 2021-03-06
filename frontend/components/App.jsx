import React from 'react';
import GreetingContainer from './greeting_container';
import { Route, Switch, Redirect } from 'react-router-dom'
import LoginFormContainer from './login/login_form_container'
import SignupFormContainer from './signup/signup_form_container'
import HomeFormContainer from "./home/home_form_container"
import AssetFormContainer from './asset/asset_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
  <div>
    <header>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer}/>
      <ProtectedRoute path="/assets/:symbol" component={AssetFormContainer}/>
      <Route exact path="/" component={HomeFormContainer}/>
      <Redirect to="/" component={HomeFormContainer}/>
    </Switch>
  </div>
);

export default App;
