import React, { Component, Suspense, lazy }from "react";

import { useState, useEffect } from "react";
// import { searching } from "./navbar.js";
var time = 2000
function Search(){
    const [arr1, setArr] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
         let timeout = setInterval(() => {
          import('./navbar.js').then(module => {
            const arr = module.arr;
            if (arr.length !== 0) {
              setArr(arr);
              setLoading(false);
              console.log(arr);
              clearInterval(timeout); 
            }
          });
        });
      },[]);

    function reset(){
        setLoading(true)
        setArr([])
        window.location.reload()   
    }
    if(loading){
        return <p></p>
    }

    return(
    
        <div>
        {arr1.map((i)=>
        <>
            <a href={i.url} target="blank" style={{color:"black", width:"400px", padding:"20px"}}>
            <div className="card" style={{width: "400px",height:"400px",float: "left"}}>
            <img src={i.urlToImage} style={{height:"200px"}} className="card-img-top" alt="no image"/>
            <div className="card-body">
                <h5 className="card-title">{i.title}</h5>
                <div style={{overflow:"hidden",height:"100px",textAlign:"justify"}}  className="card-text">{i.description}</div>
            </div>
            </div>
            </a>
        </>
        )}
        <button onClick={reset}>close</button>
        </div>
    );
    
    
}
export default Search