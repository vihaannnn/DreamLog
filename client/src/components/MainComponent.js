import React, { Component } from 'react';
import Home from './HomeComponent';
import Contact from './ContactUsComponent';
import About from './AboutUsComponent';
import Header from './HeaderComponent';
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
            <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main;
