import React, { Component } from 'react'
let colors ={
    color: 'red'
}
const green ={
    color: 'green'
}

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         txt: '',
         skill: 'Programmer'
      }
    }
    mySubmitHandler = (e) => {
        e.preventDefault();
        alert("You are submitting " + this.state.txt);
      }
     Onchanged = (e) => {
      this.setState({txt: e.target.value.toUpperCase()})
      alert({txt: e.target.value.toUpperCase()})
      this.setState({skill: e.target})
    }
  render() {
   
        let header = '' ;
        if (this.state.txt) {
           header =  <p style={green}> {this.state.txt} </p>
        }else{
            header = <p style={colors}>error linking out somewhere</p>
        }
        if(!Number (this.state.txt)) {
            // alert('must be a number')
        }else{
            <p>{this.state.txt}</p>
        }
    return (
    <form  onSubmit={this.mySubmitHandler}> 
        <h1>React Form Handling</h1>
        <label>Enter your message</label>
        <input type='text' onChange={this.Onchanged} />
        <input value={this.state.txt} type='submit' />
        <h1>{header}</h1>
        <button onChange={this.Onchanged} >btn</button>
        <select value={this.state.skill} >
            <option value='dev'>Developer</option>
            <option value='pro'>Programmer</option>
            <option value='ml'>Machine Learning</option>
            <option value='ai'>AI Developer</option>
        </select>
     </form>
    )
  }
}

export default Form