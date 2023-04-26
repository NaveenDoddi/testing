import Carousel from 'react-bootstrap/Carousel';
// import data1 from "./database.json"
import axios from 'axios';
import { useState, useEffect } from "react";

// let jsonfile = data1
function CarasoulNews() {
    const [data,setdata] = useState('')
    const [loding, setLoding] = useState(true)
    
    useEffect(()=>{
      async function fetching(){
        let response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-03-26&sortBy=publishedAt&apiKey=5bc890c22cb44f9e932f3e4c67f99ede")    
        setdata(response.data)
        setLoding(false)
          
      }
      fetching()
    },[])

  if(loding){
    return <p>loding...</p>
  }
  return (
    <div>
        <Carousel>

        {Object.entries(data.articles).map((i)=>i[0]>0 && i[0]<20 ?
        
            <Carousel.Item interval={1000}>
              <a href={i[1].url}>
              <img
                style={{width:"auto",height:"300px"}}
                className="d-block w-100"
                src= {i[1].urlToImage}
                alt="First slide"
              />
              </a>
             
              <Carousel.Caption>
                <h3>{i[1].title}</h3>
                {/* <p>{i[1].description}</p> */}
              </Carousel.Caption>
            </Carousel.Item>
        
        :"")}
        </Carousel>
        <p></p>
    </div>
   
  )
}

export default CarasoulNews;