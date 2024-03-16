import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LinkedIn from "./../images/LinkedIn.png";
import facebook from "./../images/facebook.png";
import instagram from "./../images/instagram.png";
import logo from "./../images/logo.png";
import twitter from "./../images/twitter.png";

const Footerbottom = () => {
  return (
    <>
      {/* footer start */}
      <footer>
        <div id="footer">
          <Container>
            <Row>
              <Col lg={5}>
                <img src={logo} alt="logo img" />
                <p>
                  We are always open to discuss your project and improve your
                  online presence.
                </p>
                <Row id="footer_c">
                  <Col xs={6}>
                    <h2>Email me at</h2>
                    <h3>contact@website.com</h3>
                  </Col>
                  <Col xs={6}>
                    <h2>Call Us</h2>
                    <h3>0927 6277 28525</h3>
                  </Col>
                </Row>
              </Col>
              <Col lg={{ span: 6, offset: 1 }}>
                <h4>Lets Talk</h4>
                <p>
                  We are always open to discuss your project,
                  <br />
                  improve your online presence and help with your <br />
                  UX/UI design challenges.
                </p>
                <img src={facebook} alt="facebook img" />
                <img src={twitter} alt="twitter img" />
                <img src={instagram} alt="instagram img" />
                <img src={LinkedIn} alt="LinkedIn img" />
              </Col>
            </Row>
          </Container>
        </div>
        <div id="footer_end">
          <Container>
            <Row>
              <Col lg={3} xs={12}>
                <h5>
                  <Link to="/Privacypolicy">
                    <a>Copyright 2022, Finsweet.com</a>
                  </Link>
                </h5>
              </Col>
              <Col xs={12} lg={{ span: 6, offset: 3 }}>
                <ul>
                  <li>
                    <Link to="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Aboutus">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Features">
                      <a>Features</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Pricing">
                      <a>Pricing</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Faq">
                      <a>Work</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
};

export default Footerbottom;
