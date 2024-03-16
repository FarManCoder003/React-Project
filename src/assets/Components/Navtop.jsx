import { Container, Nav, Navbar } from "react-bootstrap";
import "../Components/css/navfooter.css";
import logo from "./../images/logo.png";
import { Link } from "react-router-dom";
const Navtop = () => {
  return (
    <>
      {/* nav start */}
      <Navbar expand="lg" id="nav">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/">
                <a href="#">Home</a>
              </Link>
              <Link to="/Aboutus">
                <a href="#">About Us</a>
              </Link>
              <Link to="/Features">
                <a href="#">Features</a>
              </Link>
              <Link to="/Pricing">
                <a href="#">Pricing</a>
              </Link>
              <Link to="/Faq">
                <a href="#">Work</a>
              </Link>
              <Link to="/Blog">
                <a href="#">Blog</a>
              </Link>
              <Link to="/Contactus">
                <button>Contact Us</button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* nav end */}
    </>
  );
};

export default Navtop;
