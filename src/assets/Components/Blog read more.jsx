import { Container, Row, Col } from "react-bootstrap";
import "./css/blog read more.css";
import blog1 from "./../images/blog-1.png";
import blogmore from "./../images/blog more.png";
const Blogreadmore = () => {
  return (
    <>
      <section id="our">
        <Container>
          <Row>
            <Col xs={12} lg={{ span: 10, offset: 1 }} className="text-center">
              <h2>
                A UX Case Study on Creating a Studious Environment for Students
              </h2>
              <h3>Andrew Jonson: Posted on 27th January 2021</h3>
            </Col>
            <Col xs="12">
              <img src={blog1} alt="blog-1 img" width="100%" height="100%" />
            </Col>
            <Col xs={12} lg={{ span: 8, offset: 2 }}>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </h5>
              <h4>Ut enim ad minim veniam, quis nostrud.</h4>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </h5>
              <h5>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do.
                  </li>
                </ul>
              </h5>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </h5>
              <img src={blogmore} alt="blog more img" width="100%" />
              <h4>Ut enim ad minim veniam, quis nostrud.</h4>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </h5>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Blogreadmore;
