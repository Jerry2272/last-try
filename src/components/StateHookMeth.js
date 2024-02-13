import React from 'react'
import { useState, useEffect, useRef } from "react";

function Jerry() {
    const [color, Color] = useState("red");
    const [name, Name] = useState("Jerry");
    const [text, Text] =useState("current value state");
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");
    const nums = useRef(0);
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
  
    useEffect(() => {
      nums.current = nums.current + 1;
      previousInputValue.current = inputValue;
    }, [inputValue]);

    // useEffect( () =>{
    //   setTimeout(() =>{
    //     setCount((count.current) => count.current + 2)
    //   }, 2000)
    // }, [count])
   const  handleButtonClick = () =>{
        setInput("welcome Mr. Jerry")
    }


    return (
      <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
          <div>
            <p>{input}</p>
             <h1>{nums.current}: Changes made</h1>
            <button onClick={handleButtonClick}>Click Me</button>
          </div>
        <h1>I've rendered, {count} times!</h1>
        <h1>My favorite color is {color}!</h1>
        <button
          type="button"
          onClick={() => Color("blue")}
        >Blue</button>
        <h1>My name is {name}</h1>
        <button onClick={() =>{
          Name("Jakes")
        }}> useState</button>
        <input type='text' value={text} onChange={() =>{Text("Text value has just be updated ")}} />
      </>
    )
} 

export default Jerry 