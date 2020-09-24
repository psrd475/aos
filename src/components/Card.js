import React, { Component, Fragment } from 'react';

const card = [
  {
    bgimg: '/images/path/logo1.jpeg',
    view: '327',
    title: ' Artificial Intelligence',
  },
  {
    bgimg: '/images/path/logo2.png',
    view: '924',
    title: ' Digital Marketing',
  },
  {
    bgimg: '/images/path/logo3.png',
    view: '527',
    title: ' English Language',
  },
]
class Card extends Component {
  render() {
    const crd = card.map((item, index) => {
      return (
        <div className="col-md-6 col-lg-4 card-group-row__col" key={index}>
          <div className="card card--elevated posts-card-popular overlay card-group-row__card">
            <img
              src={item.bgimg}
              alt=""
              className="card-img"
            />
            <div className="fullbleed bg-primary" style={{ opacity: ".5" }} />
            <div className="posts-card-popular__content">
              <div className="card-body d-flex align-items-center">
                <div className="avatar-group flex">
                  <div
                    className="avatar avatar-xs"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="DigiTech Vidhya"
                  >
                    <a href="#!">
                      <img
                        src="/images/Digitech Vidya_fevicon_32 x 32 pixel.png"
                        alt="Avatar"
                        className="avatar-img rounded-circle"
                      />
                    </a>
                  </div>
                </div>
                <a
                  style={{ textDecoration: "none" }}
                  className="d-flex align-items-center"
                  href="#!"
                >
                  <i
                    className="material-icons mr-1"
                    style={{ fontSize: "inherit" }}
                  >
                    remove_red_eye
                </i>
                  <small>{item.view}</small>
                </a>
              </div>
              <div className="posts-card-popular__title card-body">

                <a className="card-title" href="fixed-blog-post.html">
                  {item.title}
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
          {crd}

        </div>
      </Fragment>
    );
  }
}

export default Card;