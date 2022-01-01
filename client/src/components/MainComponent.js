import React, { Component } from 'react';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutUsComponent';
import Header from './HeaderComponent';
import UserMain from './UserMainComponent';
import Footer from './FooterComponent.js'
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component
{
  render(){
    return(
      <div>
        <Header />
        <div>
          <Switch>
            <Route path = '/home' component={() => <Home />} />
            <Route path = '/aboutus' component = {() => <About />} />
            <Route path = '/contactus' component = {() => <Contact />} /> 
            <Route path = '/usermain' component = {() => <UserMain />} />
            <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main;
