import React, {useState} from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import "./Navbar.css"
import netflixlogo from "../Footer/images/netflixlogo.png"

// import Search from "../Movies/Search"

function App() {
  const [show, setShow] = useState(false)
    return (
<div className="navbarpos">
<Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      <div>
      <img className="netflixlogo" src={netflixlogo} width="90px" alt="netflixlogo"/>
      </div>
      <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#features">Work</Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>
      
    </Nav>
    <Nav>
    <div className="searchholder">
            <button href="#{searchmovie}" className="searchbutton">Search</button>
        </div>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
 );
}

export default App;