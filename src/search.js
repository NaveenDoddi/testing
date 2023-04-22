import React from "react";

import { lazy, Suspense } from 'react';
import { useState,useEffect } from "react";
// import { search } from "./navbar";
// var arr = search()

// arr.map((i)=>console.log(i))
function Search(){
    
    const [arr1, setArr] = useState([])
    const [loding, setLoding] = useState(true)
    function run(){
        import('./navbar.js').then(module => {
            const arr = module.arr;
            setArr(arr)
            setLoding(false)
        })
    }
    if(loding){
        return <button onClick={run}>loding...</button>
    }
    return(

        // <div>yes</div>
        <div>
        {arr1.map((i)=>
        <>
            <a href={i.url} target="blank" style={{color:"black", width:"400px", padding:"20px"}}>
            <div className="card" style={{width: "400px",height:"400px",float: "left"}}>
            <img src={i.urlToImage} style={{height:"200px"}} className="card-img-top" alt="no image"/>
            <div className="card-body">
                <h5 className="card-title">{i.title}</h5>
                <div style={{overflow:"hidden",height:"100px",textAlign:"justify"}}  className="card-text">{i.description}</div>
                {/* <a  className="btn btn-primary">read full article</a> */}
            </div>
            </div>
            </a>
        </>
        )}
        </div>
        
    )
}
export default Search