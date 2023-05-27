import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
// import Search from './search';
import { useState } from 'react';

function NavbarNews() {
  var data = JSON.parse(sessionStorage.getItem("data"))

  var [display, setDisplay] = useState(false)
  var [value, setValue] = useState("")

  function searching(){
    var input = document.getElementById("input").value

    setValue(input)
    setDisplay(true)
  }

  function Search(){
  
    function reset(){
      setValue("")
      setDisplay(false)

    }

    return(
      <>
      
      <div className="row">
      <div style={{textAlign:"right"}}><button onClick={reset} className="btn btn-dark">X</button></div>
      
      {Object.entries(data.articles).map((i)=>i[1].title.split(" ").map((j) => value.split(" ").map((k)=> k.toLowerCase() == j.toLowerCase() ?
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
      
      :"")))}
      </div>
      </>
      
    )
  }

  return (
    <>

    {/* navbar for the top of the page */}
    <Navbar bg="light">
      <Container fluid>
        <Navbar.Brand href="#" className='text-primary'><img style={{height: "40px"}} src="ikranthiLogo.jpg"/>Kranthi</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 text-primary"
              aria-label="Search"
              id='input'
              onChange={searching}
              
            />
          {/* <Button variant="outline-primary" onClick={searching}>Search</Button> */}
          </Form>
          <NavDropdown title="☰" className='btn btn-succes'>
              <NavDropdown.Item href="#action3">login</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                help
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                about
              </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {display && <Search value={value}/>}
    </>
  );
}

export default NavbarNews;