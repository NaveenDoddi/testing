import { useState, useEffect, useRef } from "react";
import React from "react";
import Toggle from "./Button";

function Timer(){
    const[sec, setCounter] = useState(10)
    const useref = useRef(null)
    const function1 = ()=>{ 
        useref.current.value= "2px solid red"
    }

    useEffect(()=>{
        setTimeout(()=>{
            setCounter((sec)=> sec=sec-1)
           
            // {document.getElementById("the").innerHTML=sec}
        },1000) 
    })
    if(sec===0){setCounter(10)} 
    return (
    <>
        <h2>seconds : { sec }</h2>
        <input ref={useref}/>
        <button onClick={function1}>fluco</button>
       <Toggle sece={sec}/>
    
    </>
    )
    
}
export default Timer