import { Container, Row, Col, Accordion } from "react-bootstrap";
import "./css/features.css";
import Featuremain from "./../images/Feature main.png";
import Benefit1 from "./../images/Benefit 1.png";
import Benefit2 from "./../images/Benefit 2.png";
import Benefit3 from "./../images/Benefit 3.png";
import Benefit4 from "./../images/Benefit 4.png";
import Benefit5 from "./../images/Benefit 5.png";
import FeatureIcon1 from "./../images/Feature Icon 1.png";
import FeatureIcon3 from "./../images/Feature Icon 3.png";
import FeatureIcon6 from "./../images/Feature Icon 6.png";
import featureimg1 from "./../images/features img 1.png";
import featureimg2 from "./../images/features img 2.png";
import featureimg3 from "./../images/features img 3.png";
import featureimg4 from "./../images/features img 4.png";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <>
      {/* feature start */}

      <section id="feature">
        <Container>
          <Row>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 5, order: 1 }}>
              <h2>All the features you need</h2>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>
              <button type="button">
                <Link to="/Pricing">
                  <a href="pricing.html">View Price</a>
                </Link>
              </button>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 7, order: 2 }}>
              <img
                src={Featuremain}
                alt="Feature main img"
                width="100%"
                height="100%"
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* feature end */}

      {/* benefit start */}
      <section id="benefit">
        <Container>
          <Row>
            <Col lg={2} xs={12} className="text-center">
              <h4>100.000+</h4>
              <h5>Finsweet Users</h5>
            </Col>
            <Col lg={2} xs={6}>
              <img src={Benefit1} alt="Benefit 1 img" />
            </Col>
            <Col lg={2} xs={6}>
              <img src={Benefit2} alt="Benefit 2 img" />
            </Col>
            <Col lg={2} xs={6}>
              <img src={Benefit3} alt="Benefit 3 img" />
            </Col>
            <Col lg={2} xs={6}>
              <img src={Benefit4} alt="Benefit 4 img" />
            </Col>
            <Col lg={2} xs={12} className="text-center">
              <img src={Benefit5} alt="Benefit 5 img" />
            </Col>
            <Col xs={12} className="text-center">
              <h2>The benefits of working</h2>
              <h2>with our team</h2>
            </Col>
            <Col lg={4} xs={12}>
              <div className="box">
                <img src={FeatureIcon6} alt="Feature Icon 6 img" />
                <h3>Customize with ease</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ut enim.
                </p>
              </div>
            </Col>
            <Col lg={4} xs={12}>
              <div className="box">
                <img src={FeatureIcon3} alt="Feature Icon 3 img" />
                <h3>Perfectly Responsive</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ut enim.
                </p>
              </div>
            </Col>
            <Col lg={4} xs={12}>
              <div className="box">
                <img src={FeatureIcon1} alt="Feature Icon 1 img" />
                <h3>Friendly Support</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ut enim.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* benefit end */}

      {/* use start */}
      <section id="use">
        <div className="box_1">
          <Container>
            <Row>
              <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }}>
                <h2>Use Client-first</h2>
                <h3>
                  Top agencies and freelancers around the world use <br />
                  Client-first{" "}
                </h3>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </h4>
              </Col>
              <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
                <img
                  src={featureimg1}
                  alt="features img 1 img"
                  width="100%"
                  height="100%"
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="box_2">
          <Container>
            <Row>
              <Col lg={6} xs={12}>
                <img
                  src={featureimg2}
                  alt="features img 2 img"
                  width="100%"
                  height="100%"
                />
              </Col>
              <Col lg={6} xs={12}>
                <h2>Free Revision Rounds</h2>
                <h3>Get free Revisions and one week of free maintenance</h3>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </h4>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="box_3">
          <Container>
            <Row>
              <Col xs={{ span: 12, order: 2 }} col lg={{ span: 6, order: 1 }}>
                <h2>24/7 Support</h2>
                <h3>
                  Working with us, you will be getting 24/7 priority support{" "}
                </h3>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </h4>
              </Col>
              <Col xs={{ span: 12, order: 1 }} col lg={{ span: 6, order: 2 }}>
                <img
                  src={featureimg3}
                  alt="features img 3 img"
                  width="100%"
                  height="100%"
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="box_4">
          <Container>
            <Row>
              <Col lg={6} xs={12}>
                <img
                  src={featureimg4}
                  alt="features img 4 img"
                  width="100%"
                  height="100%"
                />
              </Col>
              <Col lg={6} xs={12}>
                <h2>Quick Delivery</h2>
                <h3>
                  Guranteed 1 week delivery for standard five pager website{" "}
                </h3>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </h4>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* use end */}

      {/* ask start */}
      <section id="ask">
        <Container>
          <Row>
            <Col lg={5}>
              <h5>
                Frequently <br />
                asked questions
              </h5>
              <Link to="/Contactus">
                <a href="#">Contact us for more info</a>
              </Link>
            </Col>
            <Col lg={7}>
              <Accordion defaultActiveKey="0" className="ask_item_box">
                <Accordion.Item eventKey="0" className="ask_item">
                  <Accordion.Header>
                    <h3>01</h3>
                    How much time does it take?
                  </Accordion.Header>
                  <Accordion.Body className="ask_item_txt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do <br />
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="ask_item">
                  <Accordion.Header>
                    <h3>02</h3>
                    What is your className naming convention?
                  </Accordion.Header>
                  <Accordion.Body className="ask_item_txt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do <br />
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="ask_item">
                  <Accordion.Header>
                    <h3>03</h3>
                    How do you communicate?
                  </Accordion.Header>
                  <Accordion.Body className="ask_item_txt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do <br />
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="ask_item">
                  <Accordion.Header>
                    <h3>04</h3>I have a bigger project. Can you handle it?
                  </Accordion.Header>
                  <Accordion.Body className="ask_item_txt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do <br />
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="ask_item">
                  <Accordion.Header>
                    <h3>05</h3>
                    What is your className naming convention?
                  </Accordion.Header>
                  <Accordion.Body className="ask_item_txt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do <br />
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ask end */}
    </>
  );
};

export default Features;
