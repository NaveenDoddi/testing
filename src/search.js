import React from "react";
import NavbarNews from "./navbar.js";
import { useState } from "react";

function Search(){
    
    const [arr1, setArr] = useState([])
    const [loding, setLoding] = useState(true)

    function run(){
        import('./navbar.js').then(module => {
            const arr = module.arr;
            setArr(arr)
            setLoding(false)
            console.log(arr)
        })
    }

    function reset(){
        setLoding(true)
        setArr([])
    }

    if(loding){
        return <button onClick={run} href='/search'>loding...</button>
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
                {/* <a  className="btn btn-primary">read full article</a> */}
            </div>
            </div>
            </a>
        </>
        )}
        <button onClick={reset}>close</button>
        </div>
        
    )
    
}
export default Search