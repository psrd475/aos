import React, { Component, Fragment } from 'react';

const review = [
  {
    icon: 'cloud',
    title: '580+ Reviews',
    subtitle: '⭐⭐⭐'
  },
  {
    icon: 'tablet_android',
    title: '8,800+ Reviews',
    subtitle: '⭐⭐⭐⭐⭐'
  },
  {
    icon: 'youtube_searched_for',
    title: '1,937+ Reviews',
    subtitle: '⭐⭐⭐⭐'
  }
]
class Review extends Component {

  render() {
    const rev = review.map((item, index) => {
      return (
        <div className="d-flex col-md align-items-center border-bottom border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0" key={index}>
          <div className="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
            <i className="material-icons text-white">{item.icon}</i>
          </div>
          <div className="flex">
            <div className="card-title mb-4pt">{item.title}</div>
            <p className="card-subtitle text-black-70">
              {item.subtitle}
            </p>
          </div>
        </div>
      )
    })
    return (
      <Fragment>
        {/* <div>
          <div className="bg-white border-bottom-2 py-16pt ">
            <div className="container page__container">
              <div className="row align-items-center">
                {rev}
              </div>
            </div>
          </div>
        </div> */}
        <div className="two_date_at_top">
          <section className="home_slick_slide ">
            <a
              href="https://www.edureka.co/nitw-ai-ml-pgp/"
              aria-label="banner_image"
              data-bannerid={290}
              className="banner center giTrackElementHeader"
              data-gi-action="Banner_1"
              data-gi-label="default"
              data-gi-category="Homepage_Banner_Click"
              style={{
                backgroundImage:
                  'url("https://d24vv731hdkcnd.cloudfront.net/carousel-banner/New-Carousel-Banner-NITW-2.jpg")'
              }}
              onclick="triggerEvent('Banner click_home', {'Banner_position': '0'});return true;"
            />{" "}
            <a
              href="https://www.edureka.co/post-graduate/cybersecurity"
              aria-label="banner_image"
              data-bannerid={424}
              className="banner center giTrackElementHeader"
              data-gi-action="Banner_2"
              data-gi-label="default"
              data-gi-category="Homepage_Banner_Click"
              data-background-image-url="https://d24vv731hdkcnd.cloudfront.net/carousel-banner/Cybersecurity-PGP.jpg"
              onclick="triggerEvent('Banner click_home', {'Banner_position': '1'});return true;"
            />{" "}
            <a
              href="https://ict.iitk.ac.in/advanced-cloud-computing-program/"
              aria-label="banner_image"
              data-bannerid={576}
              className="banner center giTrackElementHeader"
              data-gi-action="Banner_3"
              data-gi-label="default"
              data-gi-category="Homepage_Banner_Click"
              data-background-image-url="https://d24vv731hdkcnd.cloudfront.net/carousel-banner/IITK_homepage_banner.jpg"
              onclick="triggerEvent('Banner click_home', {'Banner_position': '2'});return true;"
            />{" "}
            <a
              href="https://www.edureka.co/all-courses"
              aria-label="banner_image"
              data-bannerid={713}
              className="banner center giTrackElementHeader"
              data-gi-action="Banner_4"
              data-gi-label="default"
              data-gi-category="Homepage_Banner_Click"
              data-background-image-url="https://d24vv731hdkcnd.cloudfront.net/carousel-banner/1601008682-1920X410-Carousel.jpg"
              onclick="triggerEvent('Banner click_home', {'Banner_position': '3'});return true;"
            />{" "}
          </section>
          <section className="container-fluid few_info_below_banner">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 card_light_box ga_job_role_card">
                  <a href="https://www.edureka.co/masters-program/devops-engineer-training">
                    <span className="text" data-position={1}>
                      BECOME A <br />
                      <b>DEVOPS ENGINEER</b>
                      <br />
                    </span>
                    <span className="knowmoretxt">
                      Know More <i className="icon-Arrow-rightward2" />
                    </span>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 card_light_box ga_job_role_card">
                  <a href="https://www.edureka.co/masters-program/big-data-architect-training">
                    <span className="text" data-position={2}>
                      Become a <br /> <b> Big Data Architect </b>
                    </span>
                    <span className="knowmoretxt">
                      Know More <i className="icon-Arrow-rightward2" />
                    </span>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 card_light_box ga_job_role_card">
                  <a href="https://www.edureka.co/masters-program/data-scientist-certification">
                    <span className="text" data-position={3}>
                      Become a <br />
                      <b> Data Scientist </b>
                    </span>
                    <span className="knowmoretxt">
                      Know More <i className="icon-Arrow-rightward2" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default Review;