import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect} from 'react-router-dom';
import UserMain from './components/UserMainComponent';

class App extends Component
{
  render()
  {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
         
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
