import React, { Component } from 'react'

class ConditionalRender extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         number: 5
      }
      this.state = {
         nums: 10
      }
    }
  render() {
        // if (this.state.number > 10) {
        //   return<p>If number is greater than 10 display</p>
        // }else{
        //   return<p>This is a If conditional Rendering</p>
        // }

        let message
        if(this.state.nums === 10){
         message = <div>True: This is a variable conditional rendering</div>
        }else{
          message = <div>False: This is also a variable conditional rendering</div>
        }
        return <div>{message}</div>


  //  return     this.state.nums > 12 ?
  //        (<div>This is a ternary</div>) :
  //        ( <div>This is also a ternary conditional rendering </div>)

  // return  this.state.nums < 12 && 
  // <div>Welcome</div>
  }

}

export default ConditionalRender