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
        <div>
          <div className="bg-white border-bottom-2 py-16pt ">
            <div className="container page__container">
              <div className="row align-items-center">
                {rev}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Review;