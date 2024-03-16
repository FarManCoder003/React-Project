import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pointer2 from "./../images/Pointer-2.png";
import Pointer from "./../images/Pointer.png";
import "./css/pricing.css";

const Pricing = () => {
  return (
    <>
      {/* pricing start */}
      <section id="pricing">
        <Container>
          <Row>
            <Col lg={{ span: 6, offset: 3 }} xs={12} className="text-center">
              <h2>Our Pricing Plans</h2>
              <h3>
                When you’re ready to go beyond prototyping in Figma, Webflow is
                ready to help you bring your designs to life — without coding
                them.
              </h3>
            </Col>
            <Col lg={4} xs={12} id="box1">
              <div className="box">
                <h4>$299</h4>
                <span>Per design</span>
                <h5>Landing Page</h5>
                <h6>
                  When you’re ready to go beyond <br /> prototyping in Figma.
                </h6>
                <ul>
                  <li>
                    <img src={Pointer} alt="" />
                    All limited links
                  </li>
                  <li>
                    <img src={Pointer} alt="" />
                    Own analysis platform
                  </li>
                  <li>
                    <img src={Pointer} alt="" />
                    Chat support
                  </li>
                  <li>
                    <span className="disabled">
                      <img src={Pointer2} alt="" />
                      Optimize hashtags
                    </span>
                  </li>
                  <li>
                    <span className="disabled">
                      <img src={Pointer2} alt="" />
                      Unlimited users
                    </span>
                  </li>
                </ul>
                <button>
                  <Link to="/Contactus">
                    <a>Get Started</a>
                  </Link>
                </button>
              </div>
            </Col>
            <Col lg={4} xs={12} id="box2">
              <div className="box">
                <h4>$399</h4>
                <span>Multi design</span>
                <h5>Landing Page</h5>
                <h6>
                  When you’re ready to go beyond <br /> prototyping in Figma,
                  Webflow’s <br /> ready to help.
                </h6>
                <ul>
                  <li>
                    <img src={Pointer} alt="" />
                    All limited links
                  </li>
                  <li>
                    <img src={Pointer} alt="" />
                    Own analysis platform
                  </li>
                  <li>
                    <img src={Pointer} alt="" />
                    Chat support
                  </li>
                  <li>
                    <img src={Pointer} alt="" />
                    Optimize hashtags
                  </li>
                  <li>
                    <img src={Pointer} alt="" />
                    Unlimited users
                  </li>
                </ul>
                <button>
                  <Link to="/Contactus">
                    <a>Get Started</a>
                  </Link>
                </button>
              </div>
            </Col>
            <Col lg={4} xs={12} id="box3">
              <div className="box">
                <h4>$499+</h4>
                <span>Per design</span>
                <h5>Complex Project</h5>
                <h6>
                  When you’re ready to go beyond <br /> prototyping in Figma.
                </h6>
                <ul>
                  <li>
                    <img src={Pointer} alt="" />
                    All limited links
                  </li>
                  <li>
                    <img src={Pointer} alt="" />
                    Own analysis platform
                  </li>
                  <li>
                    <img src={Pointer} alt="" />
                    Chat support
                  </li>
                  <li>
                    <img src={Pointer} alt="" />
                    Optimize hashtags
                  </li>
                  <li>
                    <img src={Pointer} alt="" />
                    Unlimited users
                  </li>
                  <li>
                    <img src={Pointer} alt="" />
                    Assist and Help
                  </li>
                </ul>
                <button>
                  <Link to="/Contactus">
                    <a>Contact Us</a>
                  </Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* pricing end */}
    </>
  );
};

export default Pricing;
