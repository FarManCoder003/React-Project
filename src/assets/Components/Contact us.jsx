import { Container, Row, Col } from "react-bootstrap";
import "./css/contact us.css";

const Contactus = () => {
  return <>
    <section id="contact">
      <Container>
        <Row>
          <Col xs={12} lg={{ span: 6, offset: 3 }} className="text-center">
            <h2>Contact Us</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </h3>
          </Col>
          <Col xs={12} lg={{ span: 10, offset: 1 }}>
            <div className="box">
              <Row>
                <Col xs={6}>
                  <h4>Name</h4>
                  <input type="text" placeholder="Enter your name" />
                </Col>
                <Col xs={6}>
                  <h4>Email</h4>
                  <input type="email" placeholder="Enter your email" />
                </Col>
                <Col xs={6}>
                  <h4>Subject</h4>
                  <input type="text" placeholder="Provide context" />
                </Col>
                <Col xs={6}>
                  <h4>Subject</h4>
                  <input type="text" placeholder="Select subject" />
                </Col>
                <Col xs={6}>
                  <h4>Message</h4>
                  <input
                    type="text"
                    placeholder="Write your question here"
                    width="100%"
                  />
                </Col>
                <Col xs={12}>
                  <button type="submit">Send Message</button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>;
};

export default Contactus;
