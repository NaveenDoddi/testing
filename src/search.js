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
    <>
    <button onClick={reset} className="btn btn-primary">close</button>
    <div className="row">
    
    {arr1.map((i)=> 
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 img-fluid w-100%" style={{paddingBottom : "10px"}}>
      <a href={i.url} target="blank" style={{color:"black", width:"400px",textDecoration:"none"}}>
      <div className="card">
      <img src={i.urlToImage} style={{height:"200px"}} className="card-img-top" alt="no image"/>
      <div className="card-body" style={{height:"200px",overflow:"hidden"}}>
        <h5 className="card-title" >{i.title}</h5>
        <div style={{overflow:"hidden",textAlign:"justify"}}  className="card-text">{i.description}</div>
      </div>
      </div>
      </a>
      </div>
    </>
    )}
    </div>
    </>
   
  )
  
}

export default Search