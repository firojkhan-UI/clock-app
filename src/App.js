import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Clock
            title = {'BST'}
            timeDiff = {+4.5}
          />
          <Clock
           title= {'EDT'}
           timeDif= {+9.5}
          />
          <Clock
          title={'UTC'}
          timeDiff={+5.5}
          />
      </div>
    );
  }
}

export default App;
