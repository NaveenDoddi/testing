import React from "react";

function News2(){
    var data = JSON.parse(sessionStorage.getItem("data"))

    return(
        <>
        <div className="row">
        
        {Object.entries(data.articles).map((i)=>i[0]>=40 && i[0]<60 ? 
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

export default News2
