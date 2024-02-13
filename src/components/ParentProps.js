import React, { Component } from 'react'
import Child from './ChildProps'

class Parent extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'This is a Parent Component'
      }
    }

    Parent () {
        this.setState({
            message: 'This is change from parent to child'
        })
    }

    render() {
        return( <div>
            <h4>{this.state.message}</h4>
            <Child childHandler={() => this.Parent()} />
        </div>
        ) 
    }
}

export default Parent