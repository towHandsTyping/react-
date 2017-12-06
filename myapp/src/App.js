import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  setState (state) {
    this.state = {
      isstate:false
    }
  }
  changeLikeText () {
    console.log(this.state)
    this.setState({
      isstate:!this.isstate
    })
  }
  render() {
    return (
      <div className="App">
          <p onClick={this.changeLikeText()}>this is thi</p>
      </div>
    );
  }
}

export default App;
