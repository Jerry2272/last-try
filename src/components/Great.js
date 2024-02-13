import React  from 'react'

function Greet() {
    let list = ['Jerry' , 'Jake', 'Faith'];
    let map = list.map(lists => lists * 3)
    let nums = 4;
    if(nums > 1) {
     return (
     <h1>Hi Jerry Jake{map}</h1>
     
     )
    }

    else {
            return <h1>eh ya</h1>
    }
  
    
}

export default Greet
