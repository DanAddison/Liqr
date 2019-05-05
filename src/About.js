import React, { Component } from "react";
import portrait from './dan.jpg';
import './about.scss';
 
class About extends Component {
  render() {
    return (

      <div className="About">

        <div className="row row--pad">

          <div className="contact">

            <img src={portrait} alt="portrait of the developer" />

            <div className="contact__copy">

              <h1>Hi, I'm Dan</h1>

              <p>This is my first ever React.js project. I had fun!</p>
              <p>The repo for this app can be found <a href="https://github.com/DanAddison/Liqr">here</a></p>
              <p>My Linkedin profile is <a href="https://www.linkedin.com/in/danaddison/">here</a></p>
              <p>Reach me directly at <a href="mailto:danaddisoncreative@gmail.com">danaddisoncreative@gmail.com</a></p>

              <div className="contact__copy-icons">
                <span className="icon icon--github"></span>
                <span className="icon icon--linkedin"></span>
                <span className="icon icon--email"></span>
              </div>

            </div>

          </div>

        </div>

      </div>

    );
  }
}
 
export default About;