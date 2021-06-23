import React, { Component } from 'react';
import UserHomeComponent from './UserHomeComponent';
import DreamLog from './DreamLogComponent';
import Profile from './ProfileComponent';
import LoginHeader from './LoginHeaderComponent';
import Footer from './FooterComponent.js'
import { Switch, Route, Redirect} from 'react-router-dom';

class UserMain extends Component
{
  render(){
    return(
      <div>
        <LoginHeader />
        <div>
          <Switch>
            <Route path = '/userhome' component={() => <UserHomeComponent />} />
            <Route path = '/dreamlog' component = {() => <DreamLog />} />
            <Route path = '/profile' component = {() => <Profile />} />
            <Redirect to="/userhome" />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default UserMain;
