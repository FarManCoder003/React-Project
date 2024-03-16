import { Accordion, Col, Container, Row } from "react-bootstrap";
import "./css/style.css";
import Frame from "./../images/Frame.png";
import Arrow1 from "./../images/Arrow 1.png";
import Arrow2 from "./../images/Arrow 2.png";
import Arrow3 from "./../images/Arrow 3.png";
import Arrow4 from "./../images/Arrow 4.png";
import pointer1 from "./../images/pointer 1.png";
import pointer2 from "./../images/pointer 2.png";
import pointer3 from "./../images/pointer 3.png";
import pointer4 from "./../images/pointer 4.png";
import Card1 from "./../images/Card 1.png";
import Card2 from "./../images/Card 2.png";
import Card3 from "./../images/Card 3.png";
import FeatureIcon1 from "./../images/Feature Icon 1.png";
import FeatureIcon2 from "./../images/Feature Icon 2.png";
import FeatureIcon3 from "./../images/Feature Icon 3.png";
import FeatureIcon4 from "./../images/Feature Icon 4.png";
import FeatureIcon5 from "./../images/Feature Icon 5.png";
import FeatureIcon6 from "./../images/Feature Icon 6.png";
import client from "./../images/client.png";
import background from "./../images/background.png";
import blog1 from "./../images/blog 1.png";
import blog2 from "./../images/blog 2.png";
import blog3 from "./../images/blog 3.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      {/* menu start */}
      <section id="menu">
        <Container>
          <Row>
            <Col xs={{ order: 2 }} lg={{ span: 5, order: 1 }}>
              <h2>Building stellar websites for early startups</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <button type="button">
                <Link to="/Faq">
                  <a href="FAQ.html">View our work</a>
                </Link>
              </button>
              <span>
                <Link to="/Pricing">
                  <a href="pricing.html">View Pricing</a>
                </Link>
              </span>
              <img src={Arrow1} alt="Arrow 1" />
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              lg={{ span: 6, offset: 1, order: 2 }}
            >
              <img src={Frame} width="100%" />
            </Col>
          </Row>
        </Container>
      </section>
      {/* menu end */}

      {/* work start */}
      <section id="work">
        <Container>
          <Row>
            <Col lg={4}>
              <h2>How we work</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <span>Get in touch with us</span>
              <img src={Arrow2} alt="Arrow-2" />
            </Col>
            <Col lg={{ span: 6, offset: 1 }}>
              <Row>
                <Col lg={6} xs={6}>
                  <img src={pointer1} alt="" />
                  <h3>Strategy</h3>
                  <p>
                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                    aliquam .
                  </p>
                </Col>
                <Col lg={6} xs={6}>
                  <img src={pointer2} alt="" />
                  <h3>Wireframing</h3>
                  <p>
                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                    aliquam .
                  </p>
                </Col>
                <Col lg={6} xs={6}>
                  <img src={pointer3} alt="" />
                  <h3>Design</h3>
                  <p>
                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                    aliquam .
                  </p>
                </Col>
                <Col lg={6} xs={6}>
                  <img src={pointer4} alt="" />
                  <h3>Development</h3>
                  <p>
                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                    aliquam .
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* work end */}

      {/* Projects start */}
      <section id="project">
        <Container>
          <Row>
            <Col lg={10}>
              <h2>View our projects</h2>
            </Col>
            <Col lg={2}>
              <span>View More</span>
              <img src={Arrow3} alt="Arrow 3" />
            </Col>
            <Col lg={8} xs={12}>
              <div className="box_l">
                <img src={Card1} width="100%" height="100%" />
                <div className="box">
                  <Row>
                    <Col lg={12}>
                      <h3>Workhub office Webflow Webflow Design</h3>
                      <span>View project</span>
                      <img src={Arrow4} alt="" />
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="box_r">
                <Row>
                  <Col xs={12}>
                    <div id="boxes">
                      <img src={Card2} width="100%" height="100%" />
                      <div className="box">
                        <Row className="box_r_1">
                          <Col xs={12}>
                            <h3>Unisaas Website Design</h3>
                            <span>View portfolio</span>
                            <img src={Arrow4} alt="" />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div id="boxes">
                      <img src={Card3} width="100%" height="100%" />
                      <div className="box">
                        <Row className=" box_r_2">
                          <Col xs={12}>
                            <h3>Unisaas Website Design</h3>
                            <span>View portfolio</span>
                            <img src={Arrow4} alt="" />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Projects end */}

      {/* feature start */}
      <section id="feature">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h2>Features</h2>
            </Col>
            <Col lg={12} className="text-center">
              <h3>
                Design that solves problems, <br /> one product at <br />a time
              </h3>
            </Col>
            <Col xs={12} lg={4}>
              <div className="f_box">
                <img src={FeatureIcon1} alt="" />
                <h4>Uses Client First</h4>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                  aliquam sed mi.
                </p>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div className="f_box">
                <img src={FeatureIcon2} alt="" />
                <h4>Two Free Revision Round</h4>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                  aliquam sed mi.
                </p>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div className="f_box">
                <img src={FeatureIcon3} alt="" />
                <h4>Template Customization</h4>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                  aliquam sed mi.
                </p>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div className="f_box">
                <img src={FeatureIcon4} alt="" />
                <h4>24/7 Support</h4>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                  aliquam sed mi.
                </p>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div className="f_box">
                <img src={FeatureIcon5} alt="" />
                <h4>Quick Delivery</h4>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                  aliquam sed mi.
                </p>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div className="f_box">
                <img src={FeatureIcon6} alt="" />
                <h4>Hands-on approach</h4>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                  aliquam sed mi.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* feature end */}

      {/* client start */}
      <section id="client">
        <Container>
          <Row>
            <Col lg={4}>
              <h2>
                What our clients <br />
                say about us
              </h2>
              <p>
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit sed.
              </p>
            </Col>
            <Col lg={8}>
              <h3>
                &quot;The best agency we’ve worked with so far. They understand
                our product and are able to add new features with a great
                focus.&quot;
              </h3>
              <Row>
                <Col xs={1}>
                  <img src={client} alt="" />
                </Col>
                <Col xs={6}>
                  <h4>Jenny Wilson</h4>
                  <h5>Vice President</h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* client end */}

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
            <Col lg={6} className="ask_card_l">
              <img src={background} alt="" />
              <h6>Building stellar websites for early startups</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </p>
            </Col>
            <Col lg={6} className="ask_card_r">
              <h4>Send inquiry</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email" />
              <input type="url" placeholder="Paste your Figma design URL" />
              <button type="submit" id="ask_button">
                Send an Inquiry
              </button>
              <span>
                Get in touch with us <img src={Arrow1} alt="" />
              </span>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ask end */}

      {/* blog start */}
      <section id="blog">
        <Container>
          <Row>
            <Col xs={12}>
              <h2>Our Blog</h2>
            </Col>
            <Col lg={4}>
              <img src={blog1} width="100%" />
              <h3>19 Jan 2022</h3>
              <h4>
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h4>
              <p>
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract
              </p>
              <span>
                Read More <img src={Arrow3} alt="" />
              </span>
            </Col>
            <Col lg={4}>
              <img src={blog2} width="100%" />
              <h3>19 Jan 2022</h3>
              <h4>
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h4>
              <p>
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract
              </p>
              <span>
                Read More <img src={Arrow3} alt="" />
              </span>
            </Col>
            <Col lg={4}>
              <img src={blog3} width="100%" />
              <h3>19 Jan 2022</h3>
              <h4>
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h4>
              <p>
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract
              </p>
              <span>
                Read More <img src={Arrow3} alt="" />
              </span>
            </Col>
          </Row>
        </Container>
      </section>
      {/* blog end */}
    </>
  );
};

export default Main;
