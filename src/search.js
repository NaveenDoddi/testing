import React from "react";
import NavbarNews from "./navbar.js";
import { useState, useEffect } from "react";
import { searching } from "./navbar.js";

function Search(){
    const [arr1, setArr] = useState([])
    const [loding, setLoding] = useState(true)
    
    // setArr(arr)
    // console.log(arr)
    // console.log(arr1)
    // if(arr.length != 0){
        // setArr(arr)
        // setLoding(false)
        // console.log(arr)
    // }
    // useEffect(()=>{
    //     setInterval(() => {
    //         import('./navbar.js').then(module => {
    //             const arr = module.arr;
    //             if(arr.length != 0){
    //                 setArr(arr)
    //                 setLoding(false)
    //                 console.log(arr)
    //             }
    //         })
    //     }, 1000);
    // })
    
    // function run(){
    //     import('./navbar.js').then(module => {
    //         const arr = module.arr;
    //         setArr(arr)
    //         setLoding(false)
    //         console.log(arr)
    //     })
    // }
    // function reset(){
    //     setLoding(true)
    //     setArr([])
        
    // }
    // if(loding){
    //     return <button>loding...</button>
    // }

    return(
        <div></div>

        // <div>
        // {arr1.map((i)=>
        // <>
        //     <a href={i.url} target="blank" style={{color:"black", width:"400px", padding:"20px"}}>
        //     <div className="card" style={{width: "400px",height:"400px",float: "left"}}>
        //     <img src={i.urlToImage} style={{height:"200px"}} className="card-img-top" alt="no image"/>
        //     <div className="card-body">
        //         <h5 className="card-title">{i.title}</h5>
        //         <div style={{overflow:"hidden",height:"100px",textAlign:"justify"}}  className="card-text">{i.description}</div>
        //     </div>
        //     </div>
        //     </a>
        // </>
        // )}
        // {/* <button onClick={reset}>close</button> */}
        // </div>
    )
    
}
export default Search 