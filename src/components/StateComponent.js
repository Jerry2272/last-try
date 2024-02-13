import React, { Component } from 'react'

class Jerry extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        message: 'This is a state method'
     }
   }

   changeText(){
      this.setState({
         message: 'You just change state'
      })
   }
   render() {
      return(
         <div>
            <h3>{this.state.message}</h3>
            <button onClick={() => this.changeText()}> StateBtn </button>
         </div>
      )
   }
}

export default Jerry