import React from 'react';
import {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './sections/main/main_page';

class App extends Component {
  render () {
    return (
      <div className="App">
        <MainPage />
      </div>
    )
  }
}

export default App;
