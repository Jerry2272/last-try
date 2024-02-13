import React, { Component } from 'react'

class Film extends Component {
    render() {
         const {name, user} = this.props
        return(
            <div>
                <p>{name} is Destructuring this code built by {user}</p>
            </div>
        )
    }
}

export default Film 