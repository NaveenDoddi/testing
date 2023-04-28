import React from "react";
import axios from "axios";
// import { data1 } from "./fetchedData";
import { useState, useEffect } from "react";

// let data = data1
// console.log(data)

function News1(){

    const [data,setdata] = useState('')
    const [loding, setLoading] = useState(true)
    
    useEffect(() => {
        async function fetching(){
            
            let response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-03-28&sortBy=publishedAt&apiKey=87837d4baa484a0fba8427cc5388aaa2")
            // arr = response.data
            setdata(response.data)
            setLoading(false)
            
        }
        fetching()
    },[])

    if(loding){
        return <p>loding...</p>
    } 
    // Object.entries(data.articles).map((i)=>i[0] == 0 ? console.log(i[1]):0)
    return(
        <>
        <div className="row">
        <p style={{textAlign: "center"}}>top news</p>
        {Object.entries(data.articles).map((i)=>i[0]>=20 && i[0]<40 ? 
        <>
            <div className="col-sm-12 col-md-6 col-lg-4 img-fluid w-100%" style={{paddingBottom : "10px"}}>
            <a href={i[1].url} target="blank" style={{color:"black", width:"400px",textDecoration: "none"}}>
            <div className="card">
            <img src={i[1].urlToImage} style={{height:"200px"}} className="card-img-top" alt="no image"/>
            <div className="card-body" style={{height:"200px",overflow:"hidden"}}>
                <h5 className="card-title" >{i[1].title}</h5>
                <div style={{overflow:"hidden",textAlign:"justify"}}  className="card-text">{i[1].description}</div>
                {/* <a  className="btn btn-primary">read full article</a> */}
            </div>
            </div>
            </a>
            </div>
        </>
        :"")}

        </div>
        </>

       
    )

}

export default News1
