import React, { Component } from 'react';
import Header from './components/Header';
import Messages from './containers/Messages';
import FormMessage from './containers/FormMessage';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Messages />
        <FormMessage />
      </div>
    );
  }
}

export default App;
