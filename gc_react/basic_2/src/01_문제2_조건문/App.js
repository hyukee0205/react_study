import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content"
import Subject from "./components/Subject"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'read',
      selected_id:0,
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    // console.log('App.js 렌더링 완료');
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      if(this.state.selected_id === 0){
        _title = this.state.contents[0].title;
        _desc = this.state.contents[0].desc;
      }
      if(this.state.selected_id === 1){
        _title = this.state.contents[1].title;
        _desc = this.state.contents[1].desc;
      }
      if(this.state.selected_id === 2){
        _title = this.state.contents[2].title;
        _desc = this.state.contents[2].desc;
      }
    }
    // console.log("render", this);
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function () {
            // alert("hello!!");
            this.setState({
              mode:'welcome'
            })
          }.bind(this)}
        ></Subject>
        <TOC 
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({
              mode:'read',
              selected_id:id
            })
          }.bind(this)}
          ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;