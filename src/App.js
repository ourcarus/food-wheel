//app.js 
import React, { Component } from 'react'

import Wheel from './Wheel'
//import WheelComponent from 'react-wheel-of-prizes'



class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick = () => {
    console.log("button clicked")
  }
  render(){
    return (
      <div>
        <Wheel/>
        <button onClick={this.handleClick}>button</button>
      </div>
    )
  }
}

export default App