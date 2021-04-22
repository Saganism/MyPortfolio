import React, { Component } from "react";

export default class CodingExperience extends Component {
  render() {
    return (
      <div className="coding-experience py-5" id="CodingExperience">
        <h1>Coding Expeirence</h1>
        <p className="experience fs-5 mb-5">
          Where I have learned to code before...
        </p>
        <div className="container-grid row justify-content-center">
          <div className="recoded col-lg-6">
            <img src="sponsor.png" alt="" className="recoded-image mb-4" />
            <p className="recoded-text">
              Recoded is a non-profit organization aiming at empowering youth in
              the digital economy. I have graduated Recoded's React front-end
              development bootcamp and learned plenty of tools and skills,
              ranging from technical hard skills and a multitude of soft skills.
              <br></br> <a href="https://www.re-coded.com/" target="_blank"> Learn more about Recoded here.</a>
            </p>
          </div>
          <div className="flatiron col-sm-6">
            <img
              src="flatirongif.gif"
              alt="flatiron"
              className="flatiron-image mb-4"
            />
            <p className="flatiron-text">
              Flatiron School is a New York based coding school and is ranked
              the #1 coding school in the world. I have earned a front-end web
              development certificate from Flatiron School.<br></br>{" "}
              <a href="https://flatironschool.com/" target="_blank">Learn more about Flatiron School here.</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
