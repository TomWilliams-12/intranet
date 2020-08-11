import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import "./App.css";

export default class Navbar extends Component {
  state = {
    toggle: false,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div className="navBar">
        <div className="logo">
          <img
            src={require("./img/logo_white.jpg")}
            className="logo-white"
            alt="elan logo"
          ></img>
        </div>
        <button className="responsive-button" onClick={this.Toggle}>
          <FaAlignRight />
        </button>

        <div className="social-media">
          <a
            href="https://www.facebook.com/elannewhomes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./img/sm-fb.png")}
              alt="facebook logo"
              className="sm-icon"
            ></img>
          </a>
          <a
            href="https://www.instagram.com/elan.homes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./img/sm-insta.png")}
              alt="Instagram logo"
              className="sm-icon"
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/company/elan-homes-ltd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./img/sm-li.png")}
              alt="linkedin logo"
              className="sm-icon"
            ></img>
          </a>
          <a
            href="https://login.createsend.com/l/showall"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./img/sm-cm.png")}
              alt="campaign monitor logo"
              className="sm-icon"
            ></img>
          </a>
          <a
            href="https://elanhomes.contact-builder.co.uk/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./img/sm-cb.png")}
              alt="contact builder logo"
              className="sm-icon"
            ></img>
          </a>
          <a
            href="https://www.elan-images.co.uk/#/developments"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./img/sm-image.png")}
              alt="elanimage library logo"
              className="sm-icon"
            ></img>
          </a>
        </div>

        <div className="navbar-align">
          <ul className={this.state.toggle ? "nav-links show-nav" : "links"}>
            <li>
              <a className="menu-link" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="menu-link" href="/" target="_blank">
                HR Info
              </a>
            </li>
            <li>
              <a
                className="menu-link"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reports
              </a>
            </li>
            <li>
              <a
                className="menu-link"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Phone List
              </a>
            </li>
            <li>
              <a className="menu-link" href="/">
                H&amp;S
              </a>
            </li>
            <li>
              <a
                className="menu-link"
                href="https://www.elan-homes.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Elan Website
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
