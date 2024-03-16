import { Col, Container, Row } from "react-bootstrap";
import "./css/privacy policy.css";

const Privacypolicy = () => {
  return (
    <>
        {/* policy start */}

    <section id="policy">
        <Container>
            <Row>
                <Col xs={12} lg={{span:6, offset:3}}  className="text-center">
                    <h2>Privacy Policy</h2>
                    <h3>When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help you bring your </h3>
                </Col>
                <Col xs={12} lg={{span:8, offset:2}}>
                    <h4>Lorem ipsum dolor.</h4>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h5>
                    <h5>Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</h5>
                    <h5>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                        </ul>
                    </h5>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</h5>
                </Col>
            </Row>
        </Container>
    </section>
    {/* policy end */}
    </>
  )
}

export default Privacypolicy