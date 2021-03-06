import React, { Component } from 'react';

class Topic extends Component {
  render() {
    var Lists = [];
    var data = this.props.data;
    var i = 0;
    while(i < data.length) {
      Lists.push(<li key={data[i].id}>
        <a href={"/content/" + data[i].id} data-id={data[i].id} onClick={function(e) {
            e.preventDefault();
            this.props.onChangePage(e.target.dataset.id);
        }.bind(this)}>
          {data[i].title}
        </a>
      </li>);
      i = i + 1;
    }

    return (
      <nav>
        <ul>
          {Lists}
        </ul>
      </nav>
    );
  }
}

export default Topic;