import React, { Component, Fragment } from 'react';

const card = [
  {
    bgimg: '/images/path/sketch_430x168.png',
    view: 'Elijah Murray',
    title: ' Learn Sketch',
  },
  {
    bgimg: '/images/path/flinto_430x168.png',
    view: 'Elijah Murray',
    title: 'Learn Flinto',
  },
  {
    bgimg: '/images/path/photoshop_430x168.png',
    view: 'Elijah Murray',
    title: ' Learn Photoshop',
  },
  {
    bgimg: '/images/path/figma_430x168.png',
    view: 'Elijah Murray',
    title: ' Learn Figma',
  },
]
class CardGroup extends Component {
  render() {
    const cardGroup = card.map((item, index) => {
      return (
        <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col" key={index}>
          <div
            className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card"
            data-toggle="popover"
            data-trigger="click"
          >
            <a
              href="fixed-student-course.html"
              className="card-img-top js-image"
              data-position="center"
              data-height={140}
            >
              <img src={item.bgimg} alt="course" />
              <span className="overlay__content">
                <span className="overlay__action d-flex flex-column text-center">
                  <i className="material-icons icon-32pt">play_circle_outline</i>
                  <span className="card-title text-white">Preview</span>
                </span>
              </span>
            </a>
            <div className="card-body flex">
              <div className="d-flex">
                <div className="flex">
                  <a className="card-title" href="fixed-student-course.html">
                    {item.title}
                  </a>
                  <small className="text-50 font-weight-bold mb-4pt">
                    {item.view}
                  </small>
                </div>
                <a
                  href="fixed-student-course.html"
                  data-toggle="tooltip"
                  data-title="Add Favorite"
                  data-placement="top"
                  data-boundary="window"
                  className="ml-4pt material-icons text-20 card-course__icon-favorite"
                >
                  favorite_border
          </a>
              </div>
              <div className="d-flex">
                <div className="rating flex">
                  <span className="rating__item">
                    <span className="material-icons">star</span>
                  </span>
                  <span className="rating__item">
                    <span className="material-icons">star</span>
                  </span>
                  <span className="rating__item">
                    <span className="material-icons">star</span>
                  </span>
                  <span className="rating__item">
                    <span className="material-icons">star</span>
                  </span>
                  <span className="rating__item">
                    <span className="material-icons">star_border</span>
                  </span>
                </div>
                {/* <small class="text-50">6 hours</small> */}
              </div>
            </div>
            <div className="card-footer">
              <div className="row justify-content-between">
                <div className="col-auto d-flex align-items-center">
                  <span className="material-icons icon-16pt text-black-50 mr-4pt">
                    access_time
            </span>
                  <p className="flex text-black-50 lh-1 mb-0">
                    <small>6 hours</small>
                  </p>
                </div>
                <div className="col-auto d-flex align-items-center">
                  <span className="material-icons icon-16pt text-black-50 mr-4pt">
                    play_circle_outline
            </span>
                  <p className="flex text-black-50 lh-1 mb-0">
                    <small>12 lessons</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="popoverContainer d-none">
            <div className="media">
              <div className="media-left mr-12pt">
                <img
                  src="assets/images/paths/sketch_40x40@2x.png"
                  width={40}
                  height={40}
                  alt="Angular"
                  className="rounded"
                />
              </div>
              <div className="media-body">
                <div className="card-title mb-0">{item.name}</div>
                <p className="lh-1 mb-0">
                  <span className="text-black-50 small">with</span>
                  <span className="text-black-50 small font-weight-bold">
                    {item.view}
                  </span>
                </p>
              </div>
            </div>
            <p className="my-16pt text-black-70">
              Learn the fundamentals of working with {item.name} and how to create basic
              applications.
      </p>
            <div className="mb-16pt">
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-black-50 mr-8pt">
                  check
          </span>
                <p className="flex text-black-50 lh-1 mb-0">
                  <small>Fundamentals of working with {item.name}</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-black-50 mr-8pt">
                  check
          </span>
                <p className="flex text-black-50 lh-1 mb-0">
                  <small>Create complete {item.name} applications</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-black-50 mr-8pt">
                  check
          </span>
                <p className="flex text-black-50 lh-1 mb-0">
                  <small>Working with the Angular CLI</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-black-50 mr-8pt">
                  check
          </span>
                <p className="flex text-black-50 lh-1 mb-0">
                  <small>Understanding Dependency Injection</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-black-50 mr-8pt">
                  check
          </span>
                <p className="flex text-black-50 lh-1 mb-0">
                  <small>Testing with Angular</small>
                </p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-auto">
                <div className="d-flex align-items-center mb-4pt">
                  <span className="material-icons icon-16pt text-black-50 mr-4pt">
                    access_time
            </span>
                  <p className="flex text-black-50 lh-1 mb-0">
                    <small>6 hours</small>
                  </p>
                </div>
                <div className="d-flex align-items-center mb-4pt">
                  <span className="material-icons icon-16pt text-black-50 mr-4pt">
                    play_circle_outline
            </span>
                  <p className="flex text-black-50 lh-1 mb-0">
                    <small>12 lessons</small>
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <span className="material-icons icon-16pt text-black-50 mr-4pt">
                    assessment
            </span>
                  <p className="flex text-black-50 lh-1 mb-0">
                    <small>Beginner</small>
                  </p>
                </div>
              </div>
              <div className="col text-right">
                <a href="fixed-student-course.html" className="btn btn-primary">
                  Watch trailer
          </a>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <Fragment>
        <div className="row card-group-row">
          {cardGroup}
        </div>

      </Fragment>
    );
  }
}

export default CardGroup;