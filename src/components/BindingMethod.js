import React, { Component } from 'react'

class BindingMethod extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         Bind: 'Bind'
      }
      this.Binding = this.Binding.bind(this)
    }
    Binding () {
        this.setState({
            Bind: 'Binding Change'
        })
            console.log(this)
    }

  render() {
    return (
      <div>
        <h5>BindingMethod - {this.state.Bind}</h5>
        {/* <button onClick={() => this.Binding()}>Bind</button> binding arrow function in render */}
        {/* <button onClick={this.Binding.bind(this)}>Bind</button> binding in render */}
        <button onClick={this.Binding}>BinD</button>
      </div>
    )
  }
}

export default BindingMethod