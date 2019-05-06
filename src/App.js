import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Components/Contact';
import Contacts from './Components/Contacts';
import AddContact from './Components/AddContact';

class App extends Component {
  render() {
    return (
      <div className="App">
         
        <Contacts />
      </div>
    );
  }
}

export default App;
