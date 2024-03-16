import { Col, Container, Row } from "react-bootstrap";
import "./css/read work.css";
import casestudy1 from "./../images/case study 1.png";
import casestudy2 from "./../images/case study 2.png";

const Readwork = () => {
  return (
    <>
      {/* study start */}
      <section id="study">
        <Container>
          <Row>
            <Col xs={12} lg={{ span: 9, offset: 1 }}>
              <h2>Web design and development</h2>
              <h3>Finsweet Design case studies</h3>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse.
              </h4>
            </Col>

            <Col xs={12} lg={{ span: 10, offset: 1 }}>
              <img
                src={casestudy1}
                alt="case study 1 img"
                width="100%"
                height="100%"
              />
            </Col>
            <Col xs={12} lg={{ span: 2, offset: 1 }}>
              <h5>Client</h5>
              <h6>facebook.com</h6>
            </Col>
            <Col xs={12} lg={{ span: 3, offset: 1 }}>
              <h5>Service</h5>
              <h6>Product Design</h6>
            </Col>
            <Col xs={12} lg={5}>
              <h5>Deliverable</h5>
              <h6>UI Screens, UX Flow & Prototype</h6>
            </Col>
          </Row>
        </Container>
      </section>
      {/* study end */}
      {/* about start */}
      <section id="about">
        <Container>
          <Row>
            <Col xs={12} lg={{ span: 8, offset: 2 }}>
              <h2>About the project</h2>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h3>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea
                </li>
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                </li>
                <li>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                </li>
              </ul>
              <img src={casestudy2} alt="case study 2 img" width="100%" />
              <h2>How we do it</h2>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h3>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea
                </li>
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                </li>
                <li>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                </li>
              </ul>
            </Col>
            <Col xs={12} lg={{ span: 8, offset: 2 }} className="text-center">
              <span>
                <ul>
                  <li>
                    <h4>Keywords</h4>
                  </li>
                  <li>
                    <p>Design</p>
                  </li>
                  <li>
                    <p>UI/UX</p>
                  </li>
                  <li>
                    <p>Wireframing</p>
                  </li>
                  <li>
                    <p>Branding</p>
                  </li>
                  <li>
                    <p>Development</p>
                  </li>
                  <li>
                    <p>Webflow</p>
                  </li>
                </ul>
              </span>
            </Col>
          </Row>
        </Container>
      </section>
      {/* about end */}
      {/* bottom start */}
      {/* bottom end */}
    </>
  );
};

export default Readwork;
