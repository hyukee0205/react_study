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

  /* var dateState = useState(new Date().toString());
  var nowDate = dateState[0];
  var getNowDate = dateState[1]; */

  var [nowDate, getNowDate] = useState(new Date().toString());

  return (
    <div className="container">
      <h2>function style component</h2>
      <h3>Number : {number}</h3>
      <h3>Date : {nowDate}</h3>
      <p>
        <input type="button" value="RANDOM"
          onClick={
            function(){
              setNumber(Math.random())
            }
          }
        ></input>
        <input type="button" value="NOW"
          onClick={
            function(){
              getNowDate(new Date().toString())
            }
          }
        ></input>
      </p>
    </div>
  );
}

class ClassComp extends Component {
  state = {
    number : this.props.initNumber,
    date : new Date().toString()
  }
  render(){
    return (
      <div className="container">
        <h2>class style component</h2>
        <h3>Number : {this.state.number}</h3>
        <h3>Date : {this.state.date}</h3>
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

          <input type="button" value="NOW"
            onClick={
              function(){
                this.setState({
                  date : new Date().toString()
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
