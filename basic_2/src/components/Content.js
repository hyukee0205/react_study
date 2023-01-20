import React, { Component } from 'react';

class Content extends Component {
  render() {
    console.log("Content.js 렌더링 완료")
    return (
      <header>
          <h1>{this.props.title}</h1>
          {this.props.desc}
      </header>  
    );
  }
}

export default Content;