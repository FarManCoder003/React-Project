import { Col, Container, Row } from "react-bootstrap";
import "./css/FAQ.css";
import facebookd from "./../images/facebook-d.png";
import twitterd from "./../images/twitter-d.png";
import instad from "./../images/insta-d.png";
import linkedind from "./../images/linkedin-d.png";
import faq1 from "./../images/faq 1.png";
import faq2 from "./../images/faq 2.png";
import faq3 from "./../images/faq 3.png";
import faq4 from "./../images/faq 4.png";
import faq5 from "./../images/faq 5.png";
import faq6 from "./../images/faq 6.png";
import Arrow3 from "./../images/Arrow 3.png";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <>
      {/* faq start */}
      <section id="faq">
        <div className="main">
          <Container>
            <Row>
              <Col xs={12} lg={{ span: 8, offset: 2 }} className="text-center">
                <h2>What we created</h2>
                <h3>Our Work Portfolio</h3>
                <h4>
                  We help teams create great digital products by providing them
                  with tools and technology to make the design-to-code process
                  universally accessible.
                </h4>
              </Col>
              <Col
                xs={{ span: 6, offset: 3 }}
                lg={{ span: 2, offset: 5 }}
                className="text-center"
              >
                <Row>
                  <Col xs={3}>
                    <img src={facebookd} alt="facebook-d img" />
                  </Col>
                  <Col xs={3}>
                    <img src={twitterd} alt="twitter-d img" />
                  </Col>
                  <Col xs={3}>
                    <img src={instad} alt="insta-d img" />
                  </Col>
                  <Col xs={3}>
                    <img src={linkedind} alt="linkedin-d img" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <ul>
                <li>
                  <a href="#">All</a>
                </li>
                <li>
                  <a href="#">UI design</a>
                </li>
                <li>
                  <a href="#">Webflow design</a>
                </li>
                <li>
                  <a href="#">Figma Design</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} lg={6}>
              <div className="box">
                <img src={faq1} alt="faq 1 img" width="100%" height="100%" />
                <h5>Template 1</h5>
                <p>
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle.
                </p>
                <h6>
                  <Link to="/Read work">
                    <a href="read work.html">
                      Read case study <img src={Arrow3} alt="" />
                    </a>
                  </Link>
                </h6>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="box">
                <img src={faq2} width="100%" height="100%" />
                <h5>Template 2</h5>
                <p>
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle.
                </p>
                <h6>
                  <Link to="/Read work">
                    <a href="read work.html">
                      Read case study <img src={Arrow3} alt="" />
                    </a>
                  </Link>
                </h6>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="box">
                <img src={faq3} width="100%" height="100%" />
                <h5>Template 3</h5>
                <p>
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle.
                </p>
                <h6>
                  <Link to="/Read work">
                    <a href="read work.html">
                      Read case study <img src={Arrow3} alt="" />
                    </a>
                  </Link>
                </h6>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="box">
                <img src={faq4} width="100%" height="100%" />
                <h5>Template 4</h5>
                <p>
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle.
                </p>
                <h6>
                  <Link to="/Read work">
                    <a href="read work.html">
                      Read case study <img src={Arrow3} alt="" />
                    </a>
                  </Link>
                </h6>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="box">
                <img src={faq5} width="100%" height="100%" />
                <h5>Template 5</h5>
                <p>
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle.
                </p>
                <h6>
                  <Link to="/Read work">
                    <a href="read work.html">
                      Read case study <img src={Arrow3} alt="" />
                    </a>
                  </Link>
                </h6>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="box">
                <img src={faq6} width="100%" height="100%" />
                <h5>Template 6</h5>
                <p>
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle.
                </p>
                <h6>
                  <Link to="/Read work">
                    <a href="read work.html">
                      Read case study <img src={Arrow3} alt="" />
                    </a>
                  </Link>
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* faq end */}

      {/* bottom start */}
      <section id="bottom">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <h2>Let&apos;s build something great</h2>
              <h2>together</h2>
              <h3>
                Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
                ultricies
              </h3>
              <h3>nec dolor sit amet, scelerisque cursus purus.</h3>
              <button type="button">
                <a href="contact us.html">Contact Us</a>
              </button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* bottom end */}
    </>
  );
};

export default Faq;
