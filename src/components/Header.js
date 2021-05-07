import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <header className="header-nav header-white">
          <div className="fixed-header-bar">
            {/* Header Nav */}
            <div className="navbar navbar-main navbar-expand-lg">
              <div className="container">
                <a className="navbar-brand" href="index.html">
                  <h3 className="logo-dark">Field Hero</h3>
                  <h3 className="logo-light">Field Hero</h3>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbar-main-collapse"
                  aria-controls="navbar-main-collapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse navbar-collapse-overlay"
                  id="navbar-main-collapse"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item mm-in px-dropdown">
                      <a className="nav-link" href="#pages">
                        Pages
                      </a>
                      <i className="fa fa-angle-down px-nav-toggle"></i>
                      <ul className="px-dropdown-menu mm-dorp-in">
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>

                        <li>
                          <a href="services-simple.html">Services</a>
                        </li>
                        <li>
                          <a href="price.html">Pricing</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ's</a>
                        </li>
                        <li>
                          <Link to="/contact-us">Contact Us</Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item mm-in px-dropdown">
                      <a className="nav-link" href="#blog">
                        Blog
                      </a>
                      <i className="fa fa-angle-down px-nav-toggle"></i>
                      <ul className="px-dropdown-menu mm-dorp-in">
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Single Blog</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <a
                    className="d-none d-lg-inline-block m-btn m-btn-radius m-btn-theme2nd m-btn-sm m-20px-l"
                    href="#login"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
            {/* End Header Nav */}
          </div>
        </header>
        {/* Header End */}
      </div>
    );
  }
}

export default Header;
