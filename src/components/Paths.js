import React, { Component, Fragment } from 'react';

const path = [
  {
    img: '/images/path/react_40x40@2x.png',
    name: 'React Native',
    lesson: '15 courses',
  },
  {
    img: '/images/path/devops_40x40%402x.png',
    name: 'Dev Ops',
    lesson: '18 courses',
  },
  {
    img: '/images/path/redis_40x40@2x.png',
    name: 'Redis',
    lesson: '18 courses',
  }
]
class Paths extends Component {
  render() {
    const pth = path.map((item, index) => {
      return (
        <div className="col-sm-4 card-group-row__col" key={index}>
          <div
            className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card"
            data-toggle="popover"
            data-trigger="click"
          >
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-center">
                <div className="flex">
                  <div className="d-flex align-items-center">
                    <div className="rounded mr-12pt z-0 o-hidden">
                      <div className="overlay">
                        <img
                          src={item.img}
                          width={40}
                          height={40}
                          alt="React Native"
                          className="rounded"
                        />
                        <span className="overlay__content overlay__content-transparent">
                          <span className="overlay__action d-flex flex-column text-center lh-1">
                            <small
                              className="h6 small text-white mb-0"
                              style={{ fontWeight: 500 }}
                            >
                              80%
                          </small>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="card-title">{item.name}</div>
                      <p className="flex text-black-50 lh-1 mb-0">
                        <small>18 courses</small>
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="#!"
                  // href="fixed-student-path.html"
                  data-toggle="tooltip"
                  data-title="Add Favorite"
                  data-placement="top"
                  data-boundary="window"
                  className="ml-4pt material-icons text-20 card-course__icon-favorite"
                  data-original-title="" title=""
                >
                  favorite_border
              </a>
              </div>
            </div>
          </div>
          <div className="popoverContainer d-none">
            <div className="media">
              <div className="media-left mr-12pt">
                <img
                  src="/images/path/react_40x40@2x.png"
                  width={40}
                  height={40}
                  alt="Angular"
                  className="rounded"
                />
              </div>
              <div className="media-body">
                <div className="card-title">{item.name}</div>
                <p className="text-black-50 d-flex lh-1 mb-0 small">18 courses</p>
              </div>
            </div>
            <p className="mt-16pt text-black-70">
              Learn the fundamentals of working with {item.name} and how to
              create basic applications.
          </p>
            <div className="my-32pt">
              <div className="d-flex align-items-center mb-8pt justify-content-center">
                <div className="d-flex align-items-center mr-8pt">
                  <span className="material-icons icon-16pt text-black-50 mr-4pt">
                    access_time
                </span>
                  <p className="flex text-black-50 lh-1 mb-0">
                    <small>50 minutes left</small>
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <span className="material-icons icon-16pt text-black-50 mr-4pt">
                    play_circle_outline
                </span>
                  <p className="flex text-black-50 lh-1 mb-0">
                    <small>12 lessons</small>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <a
                  href="fixed-student-path.html"
                  className="btn btn-primary mr-8pt"
                >
                  Resume
              </a>
                <a
                  href="fixed-student-path.html"
                  className="btn btn-outline-secondary ml-0"
                >
                  Start over
              </a>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <small className="text-black-50 mr-8pt">Your rating</small>
              <div className="rating mr-8pt">
                <span className="rating__item">
                  <span className="material-icons text-primary">star</span>
                </span>
                <span className="rating__item">
                  <span className="material-icons text-primary">star</span>
                </span>
                <span className="rating__item">
                  <span className="material-icons text-primary">star</span>
                </span>
                <span className="rating__item">
                  <span className="material-icons text-primary">star</span>
                </span>
                <span className="rating__item">
                  <span className="material-icons text-primary">star_border</span>
                </span>
              </div>
              <small className="text-black-50">4/5</small>
            </div>
          </div>
        </div>
      )
    })
    return (
      <Fragment>
        <div className="row card-group-row">
          {pth}
        </div>
      </Fragment>
    );
  }
}

export default Paths;