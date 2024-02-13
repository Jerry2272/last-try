import React from 'react'

function Props(props){
    return (
    <div>
             <h6>This is a Props Method Component.. User: {props.name} A.K.A.{props.skill} </h6>
             {props.children}
    </div>
    )
}

export default Props