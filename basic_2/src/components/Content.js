import React, { Component } from 'react';

class Subject extends Component {
  render() {
    console.log('Content 렌더링 완료')
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.desc}
      </header>
    );
  }
}

export default Subject;