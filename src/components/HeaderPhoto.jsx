import React, { Component } from "react";

export default class HeaderPhoto extends Component {
  render() {
    return (
      <div className="header-container" id="Home">
        <img src="header.jpg" alt="header" className="header-image"/>
        <div className="overlay"></div>
        <h1 className="header-title">Hi, I am Abdulazeez Alabbasi.</h1>
        <p className="header-subtitle px-lg-5 fs-3">I'm A front-end web developer driven by a passion for developing user-friendly, interactive UIs
        that reflect the mission, values, and aspirations of the entities I work with.
        </p>
      </div>
    );
  }
}
