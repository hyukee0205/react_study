import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumber={123}></FuncComp>
      <ClassComp initNumber={456}></ClassComp>
    </div> 
  );
}

function FuncComp(props) {
  return (
    <div className="container">
      <h2>function style component</h2>
      <h3>Number : {props.initNumber}</h3>
    </div>
  );
}

class ClassComp extends React.Component {
  render(){
    return (
      <div className="container">
        <h2>class style component</h2>
        <h3>Number : {this.props.initNumber}</h3>
      </div>
    );
  }
}

export default App;