import React from 'react';
import './App.css';
import Game from './components/Game'

class App extends React.Component {

  state = {
    username: ''
  }

  render(){
    return (
      <div>
        
        <Game />
      </div>
    )
  }
}


export default App;
