import React, { Component } from 'react'

 class Ref extends Component {
    constructor(props) {
      super(props)
    this.inputRefer = React.createRef();
    this.state = {
      name: 'Jerry Jake',
      skill:'Degsiner',
      names : ''
    }
    }

    componentDidMount(){
        this.inputRefer.current.focus()
    }
    handler = () => {
            alert(this.inputRefer.current.focus())
    }
  name = (e) => {
    this.setState({skill: 'Jerry Jake'})
    alert({skill: e.target})
    this.setState({names: e.target.value})
    alert({names: e.target.value})
 } 
 onSubmit = (e) => {
  e.preventDefault()
 }
  render() {
    return (
      <>
        <input type="text" ref={this.inputRefer} />
        <button onClick={this.handler}>RefBtn</button>
        <form onSubmit={this.onSubmit}>
          <select  value={this.state.skill}>
            <option value='Dev'>Devloper</option>
            <option value='pro'>Programmer</option>
            <option value='eng'>Engineer</option>
            <option value='coder'>Coders</option>
          </select>
          <input value={this.state.names} type='text' />
          <button onClick={this.name}>Form</button>
        </form>
        </>
    )
  }
}
export default Ref