import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'welcome',
      subject:{title:'Hi~~', sub:'World Wid Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id: 1, title:'HTML', desc:'HTML is ... ~~~'},
        {id: 2, title:'CSS', desc:'CSS is .. .~~ ~'},
        {id: 3, title:'JavaScript', desc:'JavaScript is . . . .!'}
      ]
    }
  }
  render() {
    console.log('App.js 렌더링 완료');
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        <h1>
          <a href='/' onClick={function() {alert('hi');}}>
            {this.state.subject.title}</a>
            {this.state.subject.sub}
        </h1>

        {/* <Subject title={this.state.subject.title} 
        sub={this.state.subject.sub}
        ></Subject> */}
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;





