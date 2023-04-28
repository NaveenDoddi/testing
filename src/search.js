import React, { Component, Suspense, lazy }from "react";
import axios from "axios";

import { useState, useEffect } from "react";
// import { bool } from "./navbar.js";


function Search(){
  const [arr1, setArr] = useState('')
  const [loading, setLoading] = useState(true)
  const [data,setdata] = useState('')

  useEffect(() => {
    async function fetching(){
        
        let response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-03-28&sortBy=publishedAt&apiKey=87837d4baa484a0fba8427cc5388aaa2")
        // arr = response.data
        setdata(response.data)
        
    }
    fetching()
},[])

  useEffect(() => {
     let timeout = setInterval(() => {
      import('./navbar.js').then(module => {
        const input = module.searchingInput;
        if(input !== ""){
          console.log(input)
          setArr(input);
          setLoading(false);
          clearInterval(timeout);
          
        }
      });
    });
  },[]);

  // Object.entries(data.articles).map((i)=>i[1].title.split(" ").map((j)=> j.toLowerCase() === arr1.toLowerCase() ? console.log(i[1]) : ""))

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
    
    {Object.entries(data.articles).map((i)=>i[1].title.split(" ").map((j)=> j.toLowerCase() == arr1.toLowerCase() ?
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 img-fluid w-100%" style={{paddingBottom : "10px"}}>
      <a href={i[1].url} target="blank" style={{color:"black", width:"400px",textDecoration:"none"}}>
      <div className="card">
      <img src={i[1].urlToImage} style={{height:"200px"}} className="card-img-top" alt="no image"/>
      <div className="card-body" style={{height:"200px",overflow:"hidden"}}>
        <h5 className="card-title" >{i[1].title}</h5>
        <div style={{overflow:"hidden",textAlign:"justify"}}  className="card-text">{i[1].description}</div>
      </div>
      </div>
      </a>
      </div>
    </>
    :""))}
    </div>
    </>
   
  )
  
}

export default Search