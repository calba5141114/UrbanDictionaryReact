import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UrbanDictionaryList from './components/UrbanDictionaryList';

class App extends Component {
  render() {
    return (
      <div className="App container">
      <br/>
      <UrbanDictionaryList/>

      </div>
    );
  }
}

export default App;
