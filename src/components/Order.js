import React, { Component } from 'react'

 class Order extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    onCount = () =>{
        // this.setState(prevcount: this.state.count + 1})
        this.setState( preState => { return {count: preState.count + 2}})
        alert(this.state.count)
    }
  render() {
    return (
      <div>
        <button onClick={this.onCount}>User click {this.state.count} times</button>
      </div>
    )
  }
}

export default Order