import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageHeader extends Component {
  render() {
    return (
      <div>
        {/* Preload */}
        <div id="loading">
          <div className="load-circle">
            <span className="one"></span>
          </div>
        </div>
        {/* End Preload */}
        <header className="header-nav header-height header-dark header-bg">
          <div className="fixed-header-bar">
            <div className="navbar navbar-main navbar-expand-lg">
              <div className="container">
                <a className="navbar-brand" href="index.html">
                  <h1>Field Hero</h1>
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
                    <li class="nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                      <i className="fa fa-angle-down px-nav-toggle"></i>
                      <ul className="px-dropdown-menu mm-dorp-in"></ul>
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
                          <Link to="/services">Services</Link>
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
          </div>
        </header>
      </div>
    );
  }
}

export default PageHeader;
