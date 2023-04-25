import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import data1 from './database.json'

var data = data1

var arr = []
export function searching(){
    
  if(arr.length != 0){
    arr = []
  }
  
  var sub = document.getElementById("input").value.toUpperCase()
  Object.entries(data.articles).map((i)=>i[1].title.split(" ").map((j=> j.toUpperCase() == sub ? arr.push(i[1]):"")))

}

function NavbarNews() {


  return (
    <>

    <image src="https://static.vecteezy.com/system/resources/previews/005/861/537/original/half-of-the-sun-sunrise-and-sunset-free-vector.jpg"></image>
    {/* navbar for the top of the page */}
    <Navbar bg="light">
      <Container fluid>
        <Navbar.Brand href="#" className='text-primary'> Kranthi</Navbar.Brand>
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
            />
            <Button variant="outline-primary" onClick={searching} >Search</Button>
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
    
    </>
  );
}
export { arr }
export default NavbarNews;