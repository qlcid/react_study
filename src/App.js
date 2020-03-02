import React, { Component } from 'react';
import Subject from './components/Subject';
import Topic from './components/Topic';
import Content from './components/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!" />
        <Topic />
        <Content title="HTML" sub="HTML is HyperText Markup Language." />
      </div>
    );
  }
}

export default App;
