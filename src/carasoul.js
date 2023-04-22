import Carousel from 'react-bootstrap/Carousel';
import data1 from "./database.json"
import { useState, useEffect } from "react";

let jsonfile = data1
function CarasoulNews() {
    const [data,setdata] = useState(jsonfile)
    // const [loding, setLoding] = useState(true)
    
    useEffect(()=>{
        async function fetching(){
            // let response = await axios.get("C:\Users\Doddi Naveen\Desktop\coding\my-react\src\database.json")
            // let response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-03-12&sortBy=publishedAt&apiKey=3d2fb6811a924bd9a605c27c01c7e619")    
            // setdata(response.data)
            // setLoding(false)
            
        }
        fetching()
    },[])
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