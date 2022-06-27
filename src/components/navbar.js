import React, { Component } from "react"; // import component for class extend

class NavBar extends React.Component {
  // class based component
  //  cc short hand
  state = {};
  render() {
    // We get code from bootstarp and then convert it to JSX
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <a className="navbar-brand text-light ps-3" href="#">
            Apna Cart
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
