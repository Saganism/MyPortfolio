import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact" id="Contact">
        <h1 className="contact-title py-5">Contact Info</h1>
        <div className="contact-info">
          <p className="name fs-3 mb-0">Abdulazeez Alabbasi</p>
          <p className="city fs-3">Baghdad, Iraq</p>
          <p className="email fs-6">abdulazeezalabbasi74@gmail.com</p>
        </div>
        <div class="footer bg-dark w-100">
          <span className="footer-text ms-4">Abdulazeez Alabbasi, 2021.</span>
          <div className="logos mx-3">
              <a href="https://www.facebook.com/abdulazeez.alabbasi" target="_blank"><img className="pin" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDExMi4xOTYgMTEyLjE5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTEyLjE5NiAxMTIuMTk2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiMzQjU5OTg7IiBjeD0iNTYuMDk4IiBjeT0iNTYuMDk4IiByPSI1Ni4wOTgiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTcwLjIwMSw1OC4yOTRoLTEwLjAxdjM2LjY3Mkg0NS4wMjVWNTguMjk0aC03LjIxM1Y0NS40MDZoNy4yMTN2LTguMzQNCgkJYzAtNS45NjQsMi44MzMtMTUuMzAzLDE1LjMwMS0xNS4zMDNMNzEuNTYsMjEuODF2MTIuNTFoLTguMTUxYy0xLjMzNywwLTMuMjE3LDAuNjY4LTMuMjE3LDMuNTEzdjcuNTg1aDExLjMzNEw3MC4yMDEsNTguMjk0eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" /></a>
              <a href="https://github.com/saganism" target="_blank"><img className="github mx-2" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ3OC42MTMgNDc4LjYxMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc4LjYxMyA0NzguNjEzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iWE1MSURfMTIyXyI+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MjcuNTAxLDIwMC42OTVjMS43NzYtMTEuMjM4LDIuODg0LTIzLjU2LDMuMTYzLTM3LjM3N2MtMC4xMDctNTkuMjQ2LTI4LjQ2OC04MC4yMS0zMy45MjUtOTAuMDM4DQoJCQljOC4wMzctNDQuODktMS4zMzEtNjUuMzA5LTUuNjg4LTcyLjI5OWMtMTYuMDctNS43MDQtNTUuOTEsMTQuNzIyLTc3LjY3OCwyOS4xMDFjLTM1LjQ5MS0xMC4zODktMTEwLjQ5NC05LjM3NS0xMzguNjIxLDIuNjg5DQoJCQlDMTIyLjg1Ni00LjM4OSw5NS40MDgsMS4yNzcsOTUuNDA4LDEuMjc3cy0xNy43NDUsMzEuODItNC42OTEsNzguMzcxYy0xNy4wNzUsMjEuNzU5LTI5LjgwMiwzNy4xNDMtMjkuODAyLDc3Ljk0OQ0KCQkJYzAsOS43NzMsMC42MDcsMTkuMDA4LDEuNjM3LDI3Ljg5M2MxNC43MDUsNzcuMzE4LDc1Ljk3LDExMC42NzQsMTM2LjE1LDExNi40MjZjLTkuMDU2LDYuODgxLTE5LjkyOCwxOS45MDMtMjEuNDMyLDM0Ljk5Mg0KCQkJYy0xMS4zNzksNy4zNTctMzQuMjY4LDkuNzg5LTUyLjA2Nyw0LjE5M2MtMjQuOTM5LTcuODgtMzQuNDg2LTU3LjI2Ni03MS44MzMtNTAuMjIxYy04LjA4MSwxLjUxMi02LjQ3NSw2Ljg0MiwwLjUyMywxMS4zODYNCgkJCWMxMS4zNzgsNy4zOCwyMi4wOTQsMTYuNTU0LDMwLjM1NCwzNi4xODVjNi4zNDQsMTUuMDcyLDE5LjY4Nyw0MS45ODIsNjEuODczLDQxLjk4MmMxNi43NDcsMCwyOC40NzctMS45NzksMjguNDc3LTEuOTc5DQoJCQlzMC4zMTksMzguNDA2LDAuMzE5LDUzLjM4NWMwLDE3LjIzOC0yMy4yNjQsMjIuMDc4LTIzLjI2NCwzMC4zNDhjMCwzLjI4OSw3LjcsMy42MDEsMTMuODg4LDMuNjAxDQoJCQljMTIuMjI5LDAsMzcuNjczLTEwLjE4NiwzNy42NzMtMjguMTAzYzAtMTQuMjM3LDAuMjI3LTYyLjA4MSwwLjIyNy03MC40NmMwLTE4LjMwNyw5LjgxMS0yNC4xMzYsOS44MTEtMjQuMTM2DQoJCQlzMS4yMDEsOTcuNzI3LTIuMzYxLDExMC44MjljLTQuMTc3LDE1LjQwOC0xMS43NDQsMTMuMjE5LTExLjc0NCwyMC4wNzZjMCwxMC4yMzMsMzAuNTg5LDIuNTAyLDQwLjczNS0xOS44OTcNCgkJCWM3Ljg0OS0xNy40OTUsNC4zMzQtMTEzLjMzMSw0LjMzNC0xMTMuMzMxbDguMTgzLTAuMTc4YzAsMCwwLjA5NCw0My44OTItMC4xODgsNjMuOTQ0Yy0wLjI5NSwyMC43NjktMi40MzgsNDcuMDI1LDkuODk4LDU5LjQxNw0KCQkJYzguMDk3LDguMTUsMzIuOTAzLDIyLjQ1MSwzMi45MDMsOS4zODJjMC03LjU3NC0xNy4zNzEtMTMuODMzLTE3LjM3MS0zNC4zNTNWMzQ0LjQ1YzEwLjU1MywwLDEyLjczNCwzMS4wNzIsMTIuNzM0LDMxLjA3Mg0KCQkJbDMuODA0LDU3LjcyN2MwLDAtMi41MjYsMjEuMDY1LDIyLjc1NiwyOS44NTZjOC45MjUsMy4xMjYsMjguMDE4LDMuOTc2LDI4LjkxMy0xLjI3MWMwLjg5Ny01LjI2LTIyLjk5LTEzLjAzOC0yMy4yMTctMjkuMzQyDQoJCQljLTAuMTIzLTkuOTMsMC40NDUtMTUuNzQyLDAuNDQ1LTU4LjkzNGMwLTQzLjE2OC01Ljc5OS01OS4xMzctMjYuMDA3LTcxLjg2M0MzNTUuNjY5LDI5NS42ODEsNDE2LjUzNiwyNjkuNTEsNDI3LjUwMSwyMDAuNjk1eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" /></a>
              <a href="https://www.linkedin.com/in/abdulazeez-alabbasi/" target="_blank"><img className="linkedin" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM4MiAzODIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM4MiAzODI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMDc3Qjc7IiBkPSJNMzQ3LjQ0NSwwSDM0LjU1NUMxNS40NzEsMCwwLDE1LjQ3MSwwLDM0LjU1NXYzMTIuODg5QzAsMzY2LjUyOSwxNS40NzEsMzgyLDM0LjU1NSwzODJoMzEyLjg4OQ0KCUMzNjYuNTI5LDM4MiwzODIsMzY2LjUyOSwzODIsMzQ3LjQ0NFYzNC41NTVDMzgyLDE1LjQ3MSwzNjYuNTI5LDAsMzQ3LjQ0NSwweiBNMTE4LjIwNywzMjkuODQ0YzAsNS41NTQtNC41MDIsMTAuMDU2LTEwLjA1NiwxMC4wNTYNCglINjUuMzQ1Yy01LjU1NCwwLTEwLjA1Ni00LjUwMi0xMC4wNTYtMTAuMDU2VjE1MC40MDNjMC01LjU1NCw0LjUwMi0xMC4wNTYsMTAuMDU2LTEwLjA1Nmg0Mi44MDYNCgljNS41NTQsMCwxMC4wNTYsNC41MDIsMTAuMDU2LDEwLjA1NlYzMjkuODQ0eiBNODYuNzQ4LDEyMy40MzJjLTIyLjQ1OSwwLTQwLjY2Ni0xOC4yMDctNDAuNjY2LTQwLjY2NlM2NC4yODksNDIuMSw4Ni43NDgsNDIuMQ0KCXM0MC42NjYsMTguMjA3LDQwLjY2Niw0MC42NjZTMTA5LjIwOCwxMjMuNDMyLDg2Ljc0OCwxMjMuNDMyeiBNMzQxLjkxLDMzMC42NTRjMCw1LjEwNi00LjE0LDkuMjQ2LTkuMjQ2LDkuMjQ2SDI4Ni43Mw0KCWMtNS4xMDYsMC05LjI0Ni00LjE0LTkuMjQ2LTkuMjQ2di04NC4xNjhjMC0xMi41NTYsMy42ODMtNTUuMDIxLTMyLjgxMy01NS4wMjFjLTI4LjMwOSwwLTM0LjA1MSwyOS4wNjYtMzUuMjA0LDQyLjExdjk3LjA3OQ0KCWMwLDUuMTA2LTQuMTM5LDkuMjQ2LTkuMjQ2LDkuMjQ2aC00NC40MjZjLTUuMTA2LDAtOS4yNDYtNC4xNC05LjI0Ni05LjI0NlYxNDkuNTkzYzAtNS4xMDYsNC4xNC05LjI0Niw5LjI0Ni05LjI0Nmg0NC40MjYNCgljNS4xMDYsMCw5LjI0Niw0LjE0LDkuMjQ2LDkuMjQ2djE1LjY1NWMxMC40OTctMTUuNzUzLDI2LjA5Ny0yNy45MTIsNTkuMzEyLTI3LjkxMmM3My41NTIsMCw3My4xMzEsNjguNzE2LDczLjEzMSwxMDYuNDcyDQoJTDM0MS45MSwzMzAuNjU0TDM0MS45MSwzMzAuNjU0eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" /></a>
          </div>
        </div>
      </div>
    );
  }
}
