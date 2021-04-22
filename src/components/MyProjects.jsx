import React, { Component } from "react";

export default class MyProjects extends Component {
  render() {
    return (
      <div className="notable-projects" id="MyProjects">
        <h1 className="projects-title">Notable Projects</h1>
        <div className="card-grid row justify-content-center">
          <div class="card col-4 my-5 mx-5" style={{ width: "18rem" }}>
            <img class="card-img-top" src="foodbank.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Foodna</h5>
              <p class="card-text">
                A food wastage minimizing centralized platform that works as a
                bridge between entities having excess of food and charity
                organizations interested in collecting this food and
                distributing it to people in need.
              </p>
              <a href="https://github.com/Dhuha9/foodna" target="_blank" class="btn btn-dark git">
                Go To GitHub Repo
              </a>
            </div>
          </div>
          <div class="card my-5 mx-5" style={{ width: "18rem" }}>
            <img
              class="card-img-top"
              src="weather-pic.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Weather App</h5>
              <p class="card-text">
                An interactive weather web application that fetches weather data
                and presents it in a user-friendly UI, based on the city chosen
                by the app user.
              </p>
              <a
                href="https://github.com/Saganism/weather_app_js"
                target="_blank"
                class="btn btn-dark"
              >
                Go To GitHub Repo
              </a>
            </div>
          </div>
          <div class="card my-5 mx-5" style={{ width: "18rem" }}>
            <img
              class="card-img-top"
              src="hangman-pic.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Hangman Game</h5>
              <p class="card-text">
                A smooth, interactive hangman game that fetches word from API
                and starts a letter-guessing game, where every wrong guess gets
                the player closer to hanging the hangman and every right guess
                gets them closer to winning.
              </p>
              <a href="https://github.com/Othmanosx/hangman_react_js" class="btn btn-dark" target="_blank">
                Go To GitHub Repo
              </a>
            </div>
          </div>
        </div>
        <a
          href="http://github.com/Saganism"
          class="btn btn-light"
          target="_blank"
        >
          Find more
        </a>
      </div>
    );
  }
}
