// import React from 'react';
// import './App.css';
// //Calling bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
// //Calling WOWjs
// import WOW from 'wowjs';
// class App extends React.Component {
//   // Defining WOW 
//   componentDidMount() {
//     new WOW.WOW({
//       live: false
//     }).init();
//   }

//   render() {
//     return (
//       //Wow js animation in HTML
//       <div className="container text-center">
//         <div className="jumbotron bg-sky">
//           <h1>ReactJs</h1>
//           <p>Animmations with WOWjs</p>
//         </div>
//         <div className="row">
//           <div className="col-sm-4 wow bounceInDown center" data-wow-delay="0.5s">
//             <p className="circle bg-yellow">very ES  </p>
//           </div>
//           <div className="col-sm-4">
//             <img className="wow fadeInDown img-thumbnail" data-wow-delay="0.5s" src="https://wowjs.uk/img/wow-logo.jpg" alt="" />
//           </div>
//           <div className="col-sm-4 wow bounceInDown center" data-wow-delay="0.5s">
//             <p className="circle bg-yellow">very ES  </p>
//           </div>
//           <div className="col-sm-4 wow bounceInUp center" data-wow-delay="0.5s">
//             <p class="circle bg-green">3 KiB only  </p>
//           </div>
//           <div className="col-sm-4">
//             <img className="wow fadeInDown img-thumbnail" data-wow-delay="0.5s" src="https://wowjs.uk/img/wow-logo.jpg" alt="" />
//           </div>
//           <div className="col-sm-4 wow bounceInUp center" data-wow-delay="0.5s">
//             <p class="circle bg-green">3 KiB only  </p>
//           </div>
//           <div className="col-sm-4 wow bounceInRight" data-wow-delay="0.5s">
//             <p class="circle bg-red">so impress</p>
//           </div>
//           <div className="col-sm-4">
//             <img className="wow fadeInDown img-thumbnail" data-wow-delay="0.5s" src="https://wowjs.uk/img/wow-logo.jpg" alt="" />
//           </div>
//           <div className="col-sm-4 wow bounceInRight" data-wow-delay="0.5s">
//             <p class="circle bg-red">so impress</p>
//           </div>
//         </div>
//       </div>
//     );

//   }
// }
// export default App;






// import React, { Component, Fragment } from 'react';
// import './App.css'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// class App extends Component {

//   componentDidMount() {
//     AOS.init();
//   }
//   render() {
//     return (
//       <Fragment>
//         <h1>Using AOS to Add Animations</h1>
//         <h2>Basic Animation</h2>
//         <p>You need to scroll down to see the effect.</p>
//         <div className="box a" data-aos="fade-up">
//           <h2>Animated using <code>fade-up</code>.</h2></div>
//         <div className="box b" data-aos="flip-down"><h2>Animated using <code>flip-down</code>.</h2></div>
//         <div className="box b" data-aos="zoom-in"><h2>Animated using <code>zoom-in</code>.</h2></div>


//       </Fragment>
//     );
//   }
// }
// export default App;








import React, { Component, Fragment } from 'react';

import { Alert } from 'react-bootstrap';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Review from './components/Review';
import PageSeperator from './components/PageSeperator';
import Card from './components/Card';
import Path from './components/Paths';
import CardGroup from './components/CardGroup';
import Feedback from './components/Feedback';

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      toggle: true
    }
  }


  render() {
    const { show } = this.state
    return (
      <Fragment>
        {show ?
          <Alert variant="primary" onClose={() => this.setState({ show: false })} dismissible>
            <Alert.Heading>COVID-19 Lockdown Offer - Upto <strong style={{ color: "#303956" }}>20% </strong>Off &nbsp; | &nbsp;  <a href="#!" style={{ color: "#303956" }}>GRAB NOW</a></Alert.Heading>
          </Alert>
          : ''
        }
        <Header />
        <Banner />
        <Review />
        <div className="page-section border-bottom-2">
          <div className="container page__container">
            <PageSeperator name="TRENDING COURSES" />
            <Card />

            <div className="posts-cards border-bottom-2">
              <div className="card posts-card mb-0">
                <div className="posts-card__content d-flex align-items-center flex-wrap">
                  <img src="/images/path/access.png" className="avatar-img rounded" alt="Post" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-section border-bottom-2">
          <div className="container page__container">
            <div className="page-section ">
              <div className="container page__container">
                <PageSeperator name="UPCOMING COURSE" />
                <Path />
              </div>
            </div>
          </div>
        </div>

        <div className="page-section border-bottom-2">
          <div className="container page__container">
            <div className="page-section ">
              <div className="container page__container">
                <PageSeperator name="EVENT, NEWS & HACKATHON" />
                <CardGroup />
              </div>
            </div>
          </div>
        </div>

        <div className="page-section border-bottom-2">
          <div className="container page__container">
            <div className="page-section">
              <div className="container page__container">
                <div className="page-headline text-center">
                  <h2>Our students have been Hired by</h2>
                </div>
                <div className="card posts-card mb-0">
                  <div className="posts-card__content d-flex align-items-center flex-wrap">
                    <img src="/images/path/hiring.png" className="avatar-img rounded" alt="Post" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div >


        <div className="page-section border-bottom-2">
          <div className="container page__container">
            <div className="page-section">
              <div className="container page__container">
                <div className="page-headline text-center">
                  <h2>Feedback</h2>
                  <p className="lead measure-lead mx-auto text-black-70">
                    What other students turned professionals have to say about us after
                    learning with us and reaching their goals.
                  </p>
                </div>
                <Feedback />
              </div>
            </div>
          </div>
        </div >

        <div>
          {
            this.state.toggle ? <div className="form-popup" >
              <form className="form-container">
                <span class="open-button1">Drop us a Query</span>

                <input type="text" placeholder="Contact Number" name="contact_no" required />
                <input type="password" placeholder="Email" name="email" required />
                <input type="text" placeholder="Query" name="query" required />
                <button type="submit" className="btn">
                  Submit Query
                </button>
                <span className="close" onClick={() => { this.setState({ toggle: !this.state.toggle }) }}>
                  &times;
                </span>
              </form>
            </div>
              : null
          }
          <button onClick={() => { this.setState({ toggle: !this.state.toggle }) }} class="open-button">Drop Us a Query</button>
        </div>

        <Footer />




      </Fragment >
    );
  }
}

export default App;