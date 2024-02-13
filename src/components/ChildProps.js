import React from "react";

const Dom = (props) =>{
    return(
        <div>
             <h4>Child Component</h4>
             <button onClick={props.childHandler}>ChildBtn</button>
        </div>
    )
}

export default Dom 