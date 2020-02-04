import React, { Component } from 'react';
import Header from './components/header'
import Chatbot from './chat'
import './app.css';

class App extends Component {
  render() {
    console.log()
    return (
      <div className="body">
       <Header />
       <Chatbot />
      </div>
    )
  }
}

export default App;
