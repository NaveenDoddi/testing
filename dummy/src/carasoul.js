import Carousel from 'react-bootstrap/Carousel';

function CarasoulNews() {

  var data = JSON.parse(sessionStorage.getItem("data"))
  
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