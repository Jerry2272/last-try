import React, { Component } from 'react'

class SetstateMethod extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 2
      }
    }
    Increment(){
        this.setState({
            count: this.state.count + 2
        })
    }
  render() {
    return (
      <div>
        <p>SetstateMethod -Count: {this.state.count}</p>
        <button onClick={() => this.Increment()}>IncrementBtn</button>
      </div>
    )
  }
}

export default SetstateMethod