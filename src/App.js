import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
const sayHello = () => ({
  type: "HELLO_REACT"
})

let Button = ({whatsUp, stateObject, saySomething }) => (
  <div>
    <button onClick={saySomething}>
      PRESS TO DISPATCH FIRST ACTION
    </button>
    <h2>{whatsUp}</h2>
    <button onClick={()=> console.log(`Redux state: ${stateObject}`)}>
      Press to inspect
    </button>
  </div>
)

const mapStateToProps = (state) => ({
  whatsUp: state.say,
  stateObject: state
})

const mapDispatchToProps = (dispatch) => ({
  saySomething: () => { dispatch(sayHello())}
})

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button/>
      </div>
    );
  }
}

export default App;
