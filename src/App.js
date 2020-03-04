import React, { Component } from 'react';
import Subject from './components/Subject';
import Topic from './components/Topic';
import Content from './components/Content';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'Welcome',
      selected_content_id: null,
      subject: {
        title: 'WEB', sub: 'World Wide Web!'
      },
      welcome: {
        title: 'Welcome', desc: 'Hello, React!!'
      },
      subject: {
        title: "WEB", sub: "world wide web!"
      },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information'},
        { id: 2, title: 'CSS', desc: 'CSS is for design'},
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
      ]
    }
  }

  render() {
    var _title, _desc = null;
    
    if (this.state.mode === 'Welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }

    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}
                 onChangePage={function() {
                  this.setState({ mode: 'Welcome' });                  
                 }.bind(this)}
        ></Subject>
        <Topic data={this.state.contents}
               onChangePage={function(id) {
                 this.setState({ mode: 'read', selected_content_id: Number(id) })
               }.bind(this)}
        ></Topic>
        <Content title={_title} sub={_desc} />
      </div>
    );
  }
}

export default App;
