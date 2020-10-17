import React from 'react';
import './App.css';
import Game from './components/Game'
import Login from './components/Login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


class App extends React.Component {

  state = {
    username: ''
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/game" component={Game}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}


export default App;
