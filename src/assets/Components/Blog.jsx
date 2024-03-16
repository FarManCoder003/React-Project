import { Container, Row, Col } from "react-bootstrap";
import "./css/blog.css";
import blog1 from "./../images/blog-1.png";
import blog2 from "./../images/blog-2.png";
import blog3 from "./../images/blog-3.png";
import blog4 from "./../images/blog-4.png";
import blog5 from "./../images/blog-5.png";
import blog6 from "./../images/blog-6.png";
import blog7 from "./../images/blog-7.png";
import Arrow3 from "./../images/Arrow 3.png";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <>
      {/* our start */}

      <section id="our">
        <Container>
          <Row>
            <Col xs={12} lg={{ span: 10, offset: 1 }} className="text-center">
              <h2>
                A UX Case Study on Creating a Studious Environment for Students
              </h2>
              <h3>Andrew Jonson: Posted on 27th January 2021</h3>
            </Col>
            <Col xs={12}>
              <img src={blog1} alt="blog-1 img" width="100%" height="100%" />
            </Col>
            <Col xs={12} lg={{ span: 10, offset: 1 }} className="text-center">
              <h4>
                Apparently we had reached a great height in the atmosphere, for
                the sky was a dead black, and the stars had ceased to twinkle.
                By the same illusion which lifts the horizon of the sea to the
                level of the spectator on a hillside.
              </h4>
            </Col>
            <Col xs={12} className="text-center">
              <Link to="/Blogreadmore">
              <a href="">Read more</a>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      {/* our end */}

      {/* blog start */}
      <section id="blog">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <h2>Our Blog</h2>
            </Col>
            <Col lg={4}>
              <img src={blog2} alt="blog-2 img" width="100%" />
              <h3>19 Jan 2022</h3>
              <h4>
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h4>
              <p>
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract
              </p>
              <Link to="/Blogreadmore"><a href="blog read more.html">
                Read More <img src={Arrow3} alt="Arrow 3 img" />
              </a></Link>
            </Col>
            <Col lg={4}>
              <img src={blog3} alt="blog-3 img" width="100%" />
              <h3>19 Jan 2022</h3>
              <h4>
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h4>
              <p>
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract
              </p>
              <Link to="/Blogreadmore"><a href="blog read more.html">
                Read More <img src={Arrow3} alt="Arrow 3 img" />
              </a></Link>
            </Col>
            <Col lg={4}>
              <img src={blog4} alt="Blog 4 img" width="100%" />
              <h3>19 Jan 2022</h3>
              <h4>
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h4>
              <p>
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract
              </p>
              <Link to="/Blogreadmore"><a href="blog read more.html">
                Read More <img src={Arrow3} alt="Arrow 3 img" />
              </a></Link>
            </Col>
            <Col lg={4}>
              <img src={blog5} alt="blog-5 img" width="100%" />
              <h3>19 Jan 2022</h3>
              <h4>
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h4>
              <p>
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract
              </p>
              <Link to="/Blogreadmore"><a href="blog read more.html">
                Read More <img src={Arrow3} alt="Arrow 3 img" />
              </a></Link>
            </Col>
            <Col lg={4}>
              <img src={blog6} alt="Blog 6 img" width="100%" />
              <h3>19 Jan 2022</h3>
              <h4>
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h4>
              <p>
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract
              </p>
              <Link to="/Blogreadmore"><a href="blog read more.html">
                Read More <img src={Arrow3} alt="Arrow 3 img" />
              </a></Link>
            </Col>
            <Col lg={4}>
              <img src={blog7} alt="blog-7" width="100%" />
              <h3>19 Jan 2022</h3>
              <h4>
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h4>
              <p>
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract
              </p>
              <Link to="/Blogreadmore"><a href="blog read more.html">
                Read More <img src={Arrow3} alt="Arrow 3 img" />
              </a></Link>
            </Col>
          </Row>
        </Container>
      </section>
      {/* blog end */}
    </>
  );
};

export default Blog;
