import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import "./Footer.css"
import netflixico from "./images/netflix.png"

function App() {
    return (
<div className="footerpos">
<Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <div >
      <img className="netflixicosize" src={netflixico} alt="ico"></img>
      </div>
      <Nav className="mr-auto">
      <Nav.Link className="orange" href="#features">Enjoy</Nav.Link>
      <Nav.Link href="#pricing">Contact us</Nav.Link>
      <Nav.Link href="#features">Privacy</Nav.Link>
      <Nav.Link href="#pricing">Media Center</Nav.Link>
      
    </Nav>
    <Nav>
      
      <Nav.Link eventKey={2} href="#memes">
        Help Center
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
 );
}
export default App;