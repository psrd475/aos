import React, { Component, Fragment } from 'react';
import {
  Carousel
} from 'react-bootstrap';

class Banner extends Component {
  render() {
    return (
      <Fragment>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/853.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/31958.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/18295.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </Fragment>
    );
  }
}

export default Banner;