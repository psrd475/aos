import React, { Component, Fragment } from 'react';

import {
  Container, Col, Row
} from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="text-white footer-container text-lg-left">
          <Container className="container p-3 ">
            <Row className="row">
              <Col sm className="col-space" >
                <h5 >Company</h5>
                <ul className="list-unstyled mb-0 ">
                  <li>
                    <a href="#!" className="text-white">
                      About us
            </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Contact us
            </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Community
            </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Terms & Condition
            </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Private Policy or Legal & Privacy
            </a>
                  </li>
                </ul>
              </Col>
              <Col sm className="col-space">
                <h5 >Work with us</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Careers
            </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Bacome an Instructor
            </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Become an Affiliate
            </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Collaboration
            </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Hire us
            </a>
                  </li>
                </ul></Col>
              <Col sm className="col-space">
                <h5 >More</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      News
            </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Blogs
            </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Events
            </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Hackathon
            </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Reviews
            </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Student Successful Story
            </a>
                  </li>
                </ul></Col>
            </Row>
          </Container>
        </footer>
        <footer className="text-white  text-lg-left">
          <div className="js-fix-footer2 bg-dark ">
            <div className="container page__container page-section d-flex flex-column">
              <p className="brand mb-10pt mb-1 text-white">
                <img className="brand-icon" src="/images/Digitech Vidya_fevicon_32 x 32 pixel.png" width="30" alt="" /> <span style={{ fontSize: '18px', fontFamily: 'Georgia' }} className="text-white">Digitech Vidya</span>
                {/* <!-- Button trigger modal --> */}
              </p>
              <p className="text-white small mt-n1 mb-0 "> © 2020 DANZO TECHNOLOGY LLP All rights Reserved.</p>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default Footer;
