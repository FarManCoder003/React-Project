import { Container, Row, Col } from "react-bootstrap";
import "./css/about us.css";
import aboutus1 from "./../images/about us 1.png";
import Circle from "./../images/Circle.png";
import Line from "./../images/Line.png";
import aboutuswhat from "./../images/about us what.png";
import mission1 from "./../images/mission 1.png";
import mission2 from "./../images/mission 2.png";
import FeatureIcon1 from "./../images/Feature Icon 1.png";
import FeatureIcon3 from "./../images/Feature Icon 3.png";
import FeatureIcon6 from "./../images/Feature Icon 6.png";
import Benefit1 from "./../images/Benefit 1.png";
import Benefit2 from "./../images/Benefit 2.png";
import Benefit3 from "./../images/Benefit 3.png";
import Benefit4 from "./../images/Benefit 4.png";
import Benefit5 from "./../images/Benefit 5.png";
import facebook from "./../images/facebook.png";
import twitter from "./../images/twitter.png";
import LinkedIn from "./../images/LinkedIn.png";
import team1 from "./../images/team 1.png";
import team2 from "./../images/team 2.png";
import team3 from "./../images/team 3.png";
import team4 from "./../images/team 4.png";

const Aboutus = () => {
  return (
    <>
      {/* about start */}
      <section id="about">
        <Container>
          <Row>
            <Col lg={5} sm={12}>
              <h2>About Us</h2>
              <h3>Our designs solve problems</h3>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </h4>
            </Col>
            <Col xs={1}></Col>
            <Col lg={6} xs={12}>
              <img
                src={aboutus1}
                alt="about us 1 img"
                width="100%"
                height="100%"
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* about end */}

      {/* what start */}
      <section>
        <Container>
          <Row id="what">
            <Col xs={12}>
              <h2>What we are</h2>
            </Col>
            <Col lg={6} xs={12}>
              <h3>Goal focused</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
            <Col lg={6} xs={12}>
              <h3>Continuous improvement</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
            <Col xs={12}>
              <img
                src={aboutuswhat}
                alt="about us what img"
                width="100%"
                height="100%"
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* what end */}

      {/* process start */}
      <section id="process">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <h2>The process we follow</h2>
            </Col>
            <Col lg={3} xs={12}>
              <img src={Circle} alt="Circle img" />
              <img src={Line} alt="Line img" />
              <h3>Planning</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </Col>
            <Col lg={3} xs={12}>
              <img src={Circle} alt="Circle img" />
              <img src={Line} alt="Line img" />
              <h3>Conception</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </Col>
            <Col lg={3} xs={12}>
              <img src={Circle} alt="Circle img" />
              <img src={Line} alt="Line img" />
              <h3>Design</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </Col>
            <Col lg={3} xs={12}>
              <img src={Circle} alt="Circle img" />
              <img src={Line} alt="Line img" />
              <h3>Development</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* process end */}

      {/* mission start */}
      <section id="mission">
        <Container>
          <Row>
            <Col lg={6} xs={12}>
              <h2>Our mission</h2>
              <h3>Inspire, Innovate, Share</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} className="d-none d-lg-block">
              <img src={mission1} alt="mission 1 img" />
            </Col>
            <Col xs={5} className="d-none d-lg-block">
              <img src={mission2} alt="mission 2 img" />
            </Col>
            <Col lg={{ span: 6, offset: 1 }}>
              <h2>Our vision</h2>
              <h3>Laser Focus</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* mission end */}

      {/* benefit start */}
      <section id="benefit">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <h2>The benefits of working</h2>
              <h2>with us</h2>
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
          </Row>
        </Container>
      </section>
      {/* benefit end */}

      {/* team start */}
      <section id="team">
        <Container>
          <Row className="text-center">
            <Col xs={12}>
              <h2>Meet our team</h2>
            </Col>
            <Col lg={3} xs={6}>
              <div className="box">
                <div className="box_1">
                  <img src={team1} alt="" className="team1" />
                  <div className="box_txt">
                    <img src={facebook} alt="facebook img" />
                    <img src={twitter} alt="twitter img" />
                    <img src={LinkedIn} alt="LinkedIn img" />
                  </div>
                </div>
                <h3>John Smith</h3>
                <p>CEO</p>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="box">
                <div className="box_2">
                  <img src={team2} alt="" className="team2" />
                  <div className="box_txt">
                    <img src={facebook} alt="facebook img" />
                    <img src={twitter} alt="twitter img" />
                    <img src={LinkedIn} alt="LinkedIn img" />
                  </div>
                </div>
                <h3>Simon Adams</h3>
                <p>CTO</p>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="box">
                <div className="box_3">
                  <img src={team3} alt="" className="team3" />
                  <div className="box_txt">
                    <img src={facebook} alt="facebook img" />
                    <img src={twitter} alt="twitter img" />
                    <img src={LinkedIn} alt="LinkedIn img" />
                  </div>
                </div>
                <h3>Paul Jones</h3>
                <p>Design Lead</p>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="box">
                <div className="box_4">
                <img src={team4} alt="" className="team4" />
                  <div className="box_txt">
                    <img src={facebook} alt="facebook img" />
                    <img src={twitter} alt="twitter img" />
                    <img src={LinkedIn} alt="LinkedIn img" />
                  </div>
                </div>
                <h3>Sara Hardin</h3>
                <p>Project Manager</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* team end */}
    </>
  );
};

export default Aboutus;
