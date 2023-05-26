import { useState, useEffect } from "react";


function Search(){
  
  // const [loading, setLoading] = useState(true)
  var data = JSON.parse(sessionStorage.getItem("data"))

  // var input = null
  var input = sessionStorage.getItem("searchinInput")

  console.log(input)

  // if(input != null){
  //   setLoading(false)
  // }
  // Object.entries(data.articles).map((i)=>i[1].title.split(" ").map((j)=> j.toLowerCase() === arr1.toLowerCase() ? console.log(i[1]) : ""))

  function reset(){
    sessionStorage.removeItem("searchingInput") 
  }

  // if(loading){
  //   return <p></p>
    
  // }
  return(
    <>
    <button onClick={reset} className="btn btn-primary">close</button>
    <div className="row">
    
    {Object.entries(data.articles).map((i)=>i[1].title.split(" ").map((j)=> j.toLowerCase() == input.toLowerCase() ?
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 img-fluid w-100%" style={{paddingBottom : "10px"}}>
      <a href={i[1].url} target="blank" style={{color:"black", width:"400px",textDecoration:"none"}}>
      <div className="card">
      <img src={i[1].urlToImage} style={{height:"200px"}} className="card-img-top" alt="no image"/>
      <div className="card-body" style={{height:"200px", overflow:"hidden"}}>
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