import React, { Component, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumber={123}></FuncComp>
      <ClassComp initNumber={222}></ClassComp>
    </div> 
  );
}

function FuncComp(aaa) {
  var numberState = useState(aaa.initNumber);
  var number = numberState[0];
  var setNumber = numberState[1];
  return (
    <div className="container">
      <h2>function style component</h2>
      <h3>Number : {number}</h3>
      <p>
        <input type="button" value="RANDOM"
          onClick={
            function(){
              setNumber(Math.random())
            }
          }
        ></input>
      </p>
    </div>
  );
}

class ClassComp extends Component {
  state = {
    number : this.props.initNumber
  }
  render(){
    return (
      <div className="container">
        <h2>class style component</h2>
        <h3>Number : {this.state.number}</h3>
        <p>
          <input type="button" value="RANDOM"
            onClick={
              function(){
                this.setState({
                  number : Math.random()
                })
              }.bind(this)
            }
          ></input>
        </p>
      </div>
    );
  }
}

export default App;
