import React, { Component } from "react";
import MyProjects from './MyProjects';
import CodingExperience from './CodingExperience';
import HeaderPhoto from './HeaderPhoto'


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#Home">
              My Portfolio
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#Home">
                    Home
                  </a>
                </li>
                <li class="nav-item ms-3">
                  <a class="nav-link" href="#MyProjects">
                    Projects
                  </a>
                </li>
                <li class="nav-item ms-3">
                  <a class="nav-link" href="#CodingExperience">
                    Coding Experience
                  </a>
                </li>
                <li class="nav-item ms-3">
                  <a class="nav-link" href="#Contact">
                    Conact Info
                  </a>
                </li>
              </ul>              
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
