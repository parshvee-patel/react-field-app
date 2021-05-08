import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        {/* Preload 
        <div id="loading">
          <div className="load-circle">
            <span className="one"></span>
          </div>
        </div>
        {/* End Preload */}

        {/* Main */}
        <main>
          {/* Home Banner */}
          <section
            className="effect-section theme-bg parallax"
            style={{ backgroundImage: `url("assets/img/1600x900.jpg")` }}
          >
            <div className="mask black-bg opacity-7"></div>
            <div className="effect-1 opacity-8">
              <svg
                src={"assets/img/effect/style-1.svg"}
                title=""
                alt=""
                className="svg_img theme-color"
              />
            </div>
            <div className="effect-4 opacity-8">
              <svg
                src={"assets/img/effect/style-1.svg"}
                title=""
                alt=""
                className="svg_img theme-color"
              />
            </div>
            <div className="container">
              <div className="row full-screen align-items-center p-100px-tb justify-content-center">
                <div className="col-lg-8 m-15px-tb text-center">
                  <h6 className="m-10px-b white-color">- Build like a Pro</h6>
                  <h1 className="display-4 m-10px-b white-color">
                    <span className="font-w-300">It's time to amplify</span>
                    <br />
                    your online business
                  </h1>
                  <p className="font-2 white-color-light">
                    Raino is a HTML5 template based on Sass and Bootstrap 4 with
                    modern and creative multipurpose design you can use it as a
                    startups.
                  </p>
                  <div className="p-20px-t m-btn-wide">
                    <a
                      className="m-btn m-btn-radius m-btn-t-white m-10px-r"
                      href="#signUp"
                    >
                      <span className="m-btn-inner-text">Sign Up</span>
                      <span className="m-btn-inner-icon arrow"></span>
                    </a>
                    <a
                      className="m-btn m-btn-radius m-btn-white"
                      href="#freeTry"
                    >
                      <span className="m-btn-inner-text">Free Try</span>
                      <span className="m-btn-inner-icon arrow"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Home Banner */}
          {/* Section */}
          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 m-15px-tb">
                  <h6 className="theme-color m-15px-b">What we do?</h6>
                  <h2 className="h1 font-w-700">
                    We help to create strategies, design & development.
                  </h2>
                  <div className="border-top-2 border-color-dark p-30px-t m-30px-t">
                    <p className="font-2">
                      Raino is a HTML5 template based on Sass and Bootstrap 4
                      with modern and creative multipurpose design.
                    </p>
                  </div>
                  <div className="p-20px-t">
                    <Link
                      className="m-btn m-btn-radius m-btn-dark m-10px-r"
                      to="/contact-us"
                    >
                      <span className="m-btn-inner-text">Contact Us</span>
                      <span className="m-btn-inner-icon arrow"></span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 ml-lg-auto m-15px-tb">
                  <div className="row">
                    <div className="col-sm-6 m-20px-tb">
                      <div className="p-25px-lr p-35px-tb gray-bg border-radius-15 theme-hover-bg hover-top">
                        <div className="only-icon-60 m-20px-b dark-color d-inline-block">
                          <i className="icon-desktop"></i>
                        </div>
                        <h5>Web Development</h5>
                        <p className="m-0px">
                          Lorem Ipsum is simply text the printing and
                          typesetting.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 m-20px-tb">
                      <div className="p-25px-lr p-35px-tb gray-bg border-radius-15 theme-hover-bg hover-top">
                        <div className="only-icon-60 m-20px-b dark-color d-inline-block">
                          <i className="icon-hotairballoon"></i>
                        </div>
                        <h5>Logo & Identity</h5>
                        <p className="m-0px">
                          Lorem Ipsum is simply text the printing and
                          typesetting.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 m-20px-tb">
                      <div className="p-25px-lr p-35px-tb gray-bg border-radius-15 theme-hover-bg hover-top">
                        <div className="only-icon-60 m-20px-b dark-color d-inline-block">
                          <i className="icon-scissors"></i>
                        </div>
                        <h5>Graphics Design</h5>
                        <p className="m-0px">
                          Lorem Ipsum is simply text the printing and
                          typesetting.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 m-20px-tb">
                      <div className="p-25px-lr p-35px-tb gray-bg border-radius-15 theme-hover-bg hover-top">
                        <div className="only-icon-60 m-20px-b dark-color d-inline-block">
                          <i className="icon-laptop"></i>
                        </div>
                        <h5>Social Marketing</h5>
                        <p className="m-0px">
                          Lorem Ipsum is simply text the printing and
                          typesetting.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Section */}
          {/* Section */}
          <section className="effect-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 min-h-350px">
                  <div className="p-100px-tb p-50px-r lg-p-0px-r d-flex align-items-center h-100">
                    <div>
                      <h1 className="display-4 font-w-700 white-color">
                        Truly Corporate Theme
                      </h1>
                      <p className="lead white-color-light">
                        We help to create strategies, design & development.
                      </p>
                      <div className="p-20px-t">
                        <Link
                          className="m-btn m-btn-radius m-btn-white"
                          to="/about"
                        >
                          <span className="m-btn-inner-text">
                            More About Us
                          </span>
                          <span className="m-btn-inner-icon arrow"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mask-50vw left parallax"
                    style={{
                      backgroundImage: "url(assets/img/1000x1000.jpg)",
                    }}
                  >
                    <div className="mask opacity-8 theme-bg"></div>
                  </div>
                </div>
                <div className="col-lg-6 min-h-350px">
                  <div className="p-100px-tb p-50px-l lg-p-0px-l d-flex align-items-center h-100">
                    <div>
                      <h1 className="display-4 font-w-700 white-color">
                        We help to create visual strategies.
                      </h1>
                      <p className="lead white-color-light">
                        We help to create strategies, design & development.
                      </p>
                      <div className="p-20px-t">
                        <a
                          className="m-btn m-btn-radius m-btn-dark"
                          href="#project"
                        >
                          <span className="m-btn-inner-text">
                            View Projects
                          </span>
                          <span className="m-btn-inner-icon arrow"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mask-50vw right parallax"
                    style={{
                      backgroundImage: "url(assets/img/1000x1000.jpg)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
          {/* End Section */}
          {/* Section */}
          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 m-15px-tb">
                  <h3 className="h1 m-20px-b">
                    Unlimited power and customization possibilities.
                  </h3>
                  <p className="lead">
                    Raino is a HTML5 template based on Sass and Bootstrap 4 with
                    modern and creative multipurpose design
                  </p>
                  <div className="p-20px-tb">
                    <div className="skill-lt md">
                      <h6 className="dark-color">Website Development</h6>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-in theme-bg"
                          role="progressbar"
                          aria-valuenow="92"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span>92%</span>
                        </div>
                      </div>
                    </div>
                    {/* /skill */}
                    <div className="skill-lt md">
                      <h6 className="dark-color">Mobile Development</h6>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-in theme-bg"
                          role="progressbar"
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span>85%</span>
                        </div>
                      </div>
                    </div>
                    {/* /skill */}
                  </div>
                </div>
                <div className="col-lg-5 col-xl-4 ml-lg-auto align-self-center m-15px-tb">
                  <div className="accordion accordion-08 p10 border-radius-15 dark-bg white-color-light links-white">
                    <div className="acco-group">
                      <a href="#ui" className="acco-heading">
                        Ux/Ui and Brand Designer
                      </a>
                      <div className="acco-des">
                        Adipisicing elit lorem ipsum dolor sit amet,
                        consectetur. Tempora, ab officiis ducimus commodi
                      </div>
                    </div>
                    <div className="acco-group">
                      <a href="#wordpress" className="acco-heading">
                        WordPress Developer Course
                      </a>
                      <div className="acco-des">
                        Adipisicing elit lorem ipsum dolor sit amet,
                        consectetur. Tempora, ab officiis ducimus commodi
                      </div>
                    </div>
                    <div className="acco-group">
                      <a href="#magento" className="acco-heading">
                        Magento Development
                      </a>
                      <div className="acco-des">
                        Adipisicing elit lorem ipsum dolor sit amet,
                        consectetur. Tempora, ab officiis ducimus commodi
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Section */}
          {/* Section */}
          <section
            className="parallax counter"
            style={{ backgroundImage: "url(assets/img/1000x1000.jpg)" }}
          >
            <div className="container">
              <div className="row screen-50 align-items-end p-50px-t">
                <div className="col-lg-3 col-6 m-30px-t">
                  <div className="theme-bg p12">
                    <div className="media white-color">
                      <div className="only-icon-50 d-none d-sm-block m-20px-r">
                        <i className="icon-desktop"></i>
                      </div>
                      <div className="media-body">
                        <h6
                          className="count h2 font-w-700 m-0px"
                          data-to="640"
                          data-speed="640"
                        >
                          640
                        </h6>
                        <h5 className="m-0px font-w-500">
                          Live
                          <br /> Projects
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6 m-30px-t">
                  <div className="dark-bg p12">
                    <div className="media white-color">
                      <div className="only-icon-50 d-none d-sm-block m-20px-r">
                        <i className="icon-camera"></i>
                      </div>
                      <div className="media-body">
                        <h6
                          className="count h2 font-w-700 m-0px"
                          data-to="890"
                          data-speed="890"
                        >
                          890
                        </h6>
                        <h5 className="m-0px font-w-500">
                          Photo
                          <br /> Capture
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6 m-30px-t">
                  <div className="theme-bg p12">
                    <div className="media white-color">
                      <div className="only-icon-50 d-none d-sm-block m-20px-r">
                        <i className="icon-laptop"></i>
                      </div>
                      <div className="media-body">
                        <h6
                          className="count h2 font-w-700 m-0px"
                          data-to="290"
                          data-speed="290"
                        >
                          290
                        </h6>
                        <h5 className="m-0px font-w-500">
                          Projects
                          <br /> Completed
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6 m-30px-t">
                  <div className="dark-bg p12">
                    <div className="media white-color">
                      <div className="only-icon-50 d-none d-sm-block m-20px-r">
                        <i className="icon-chat"></i>
                      </div>
                      <div className="media-body">
                        <h6
                          className="count h2 font-w-700 m-0px"
                          data-to="860"
                          data-speed="860"
                        >
                          860
                        </h6>
                        <h5 className="m-0px font-w-500">
                          Happy
                          <br /> Clients
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Section */}
          {/* Section */}
          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-xl-4 m-15px-tb">
                  <h6 className="body-color">Awards & Honors</h6>
                  <h3 className="h1 font-w-700">
                    The awards won by our project..
                  </h3>
                </div>
                <div className="col-lg-6 ml-lg-auto">
                  <div className="row">
                    <div className="col-6 m-15px-tb">
                      <div className="p-25px-lr">
                        <div className="m-15px-b">
                          <img src={"assets/img/300x100.jpg"} title="" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-6 m-15px-tb">
                      <div className="p-25px-lr">
                        <div className="m-15px-b">
                          <img src={"assets/img/300x100.jpg"} title="" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-6 m-15px-tb">
                      <div className="p-25px-lr">
                        <div className="m-15px-b">
                          <img src={"assets/img/300x100.jpg"} title="" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-6 m-15px-tb">
                      <div className="p-25px-lr">
                        <div className="m-15px-b">
                          <img src={"assets/img/300x100.jpg"} title="" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Section */}
          {/* Section */}
          <section className="section gray-bg">
            <div className="container">
              <div className="row justify-content-center md-m-25px-b m-40px-b">
                <div className="col-lg-8 text-center">
                  <h3 className="h1 m-15px-b">Our experience experts</h3>
                  <p className="m-0px font-2">
                    Raino is a HTML5 template based on Sass and Bootstrap 4 with
                    modern and creative multipurpose design you can use it as a
                    startups.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-lg-3 m-15px-tb">
                  <div className="our-team">
                    <div className="team-img black-after">
                      <img src={"assets/img/1000x1000.jpg"} title="" alt="" />
                      <div className="team-desc">
                        <p className="white-color">
                          Raino is a HTML5 template based on Sass and Bootstrap
                          4
                        </p>
                        <div className="social-icon si-30 white radius nav">
                          <a href="#facebook">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#twitter">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#twitter">
                            <i className="fab fa-twitter-in"></i>
                          </a>
                          <a href="#instagram">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="team-info">
                      <h6 className="m-5px-b">Nancy Bayers</h6>
                      <p className="m-0px font-1">CEO, pxdraft Studio</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 m-15px-tb">
                  <div className="our-team">
                    <div className="team-img black-after">
                      <img src={"assets/img/1000x1000.jpg"} title="" alt="" />
                      <div className="team-desc">
                        <p className="white-color">
                          Raino is a HTML5 template based on Sass and Bootstrap
                          4
                        </p>
                        <div className="social-icon si-30 white radius nav">
                          <a href="#facebook">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#twitter">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#linkedin">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#instagram">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="team-info">
                      <h6 className="m-5px-b">Nancy Bayers</h6>
                      <p className="m-0px font-1">CEO, pxdraft Studio</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 m-15px-tb">
                  <div className="our-team">
                    <div className="team-img black-after">
                      <img src={"assets/img/1000x1000.jpg"} title="" alt="" />
                      <div className="team-desc">
                        <p className="white-color">
                          Raino is a HTML5 template based on Sass and Bootstrap
                          4
                        </p>
                        <div className="social-icon si-30 white radius nav">
                          <a href="#facebook">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#twitter">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#linkedin">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#instagram">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="team-info">
                      <h6 className="m-5px-b">Nancy Bayers</h6>
                      <p className="m-0px font-1">CEO, pxdraft Studio</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 m-15px-tb">
                  <div className="our-team">
                    <div className="team-img black-after">
                      <img src={"assets/img/1000x1000.jpg"} title="" alt="" />
                      <div className="team-desc">
                        <p className="white-color">
                          Raino is a HTML5 template based on Sass and Bootstrap
                          4
                        </p>
                        <div className="social-icon si-30 white radius nav">
                          <a href="#facebook">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#twitter">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#linkedin">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#instagram">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="team-info">
                      <h6 className="m-5px-b">Nancy Bayers</h6>
                      <p className="m-0px font-1">CEO, pxdraft Studio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Section */}
          {/* Section */}
          <section className="section">
            <div className="container">
              <div className="row justify-content-center md-m-25px-b m-40px-b">
                <div className="col-lg-8 text-center">
                  <h3 className="h1 m-15px-b">Simple, Straight Pricing</h3>
                  <p className="m-0px font-2">
                    Raino is a HTML5 template based on Sass and Bootstrap 4 with
                    modern and creative multipurpose design you can use it as a
                    startups.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-lg-3 m-15px-tb">
                  <div className="card white-bg">
                    <div className="p-20px">
                      <div className="p-25px-b">
                        <h5 className="m-10px-b">Personal</h5>
                        <h4 className="display-4 m-10px-b">$49</h4>
                        <span className="gray-bg d-inline-block p-5px-tb p-10px-lr border-radius-3 dark-color font-alt font-w-600 font-1">
                          Monthly
                        </span>
                      </div>
                      <ul className="list-type-02">
                        <li>Drag &amp; Drop Builder</li>
                        <li>1,000s of Templates Ready</li>
                        <li>Blog Tools</li>
                        <li>eCommerce Store</li>
                        <li>30+ Webmaster Tools</li>
                      </ul>
                      <div className="p-25px-t">
                        <a
                          className="m-btn m-btn-theme m-btn-radius w-100"
                          href="#start"
                        >
                          Let's Start
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 m-15px-tb">
                  <div className="card white-bg">
                    <div className="p-20px">
                      <div className="p-25px-b">
                        <h5 className="m-10px-b">Personal</h5>
                        <h4 className="display-4 m-10px-b">$49</h4>
                        <span className="gray-bg d-inline-block p-5px-tb p-10px-lr border-radius-3 dark-color font-alt font-w-600 font-1">
                          Monthly
                        </span>
                      </div>
                      <ul className="list-type-02">
                        <li>Drag &amp; Drop Builder</li>
                        <li>1,000s of Templates Ready</li>
                        <li>Blog Tools</li>
                        <li>eCommerce Store</li>
                        <li>30+ Webmaster Tools</li>
                      </ul>
                      <div className="p-25px-t">
                        <a
                          className="m-btn m-btn-theme m-btn-radius w-100"
                          href="#start"
                        >
                          Let's Start
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 m-15px-tb">
                  <div className="card white-bg">
                    <div className="p-20px">
                      <div className="p-25px-b">
                        <h5 className="m-10px-b">Personal</h5>
                        <h4 className="display-4 m-10px-b">$49</h4>
                        <span className="gray-bg d-inline-block p-5px-tb p-10px-lr border-radius-3 dark-color font-alt font-w-600 font-1">
                          Monthly
                        </span>
                      </div>
                      <ul className="list-type-02">
                        <li>Drag &amp; Drop Builder</li>
                        <li>1,000s of Templates Ready</li>
                        <li>Blog Tools</li>
                        <li>eCommerce Store</li>
                        <li>30+ Webmaster Tools</li>
                      </ul>
                      <div className="p-25px-t">
                        <a
                          className="m-btn m-btn-theme m-btn-radius w-100"
                          href="#start"
                        >
                          Let's Start
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 m-15px-tb">
                  <div className="card white-bg">
                    <div className="p-20px">
                      <div className="p-25px-b">
                        <h5 className="m-10px-b">Personal</h5>
                        <h4 className="display-4 m-10px-b">$49</h4>
                        <span className="gray-bg d-inline-block p-5px-tb p-10px-lr border-radius-3 dark-color font-alt font-w-600 font-1">
                          Monthly
                        </span>
                      </div>
                      <ul className="list-type-02">
                        <li>Drag &amp; Drop Builder</li>
                        <li>1,000s of Templates Ready</li>
                        <li>Blog Tools</li>
                        <li>eCommerce Store</li>
                        <li>30+ Webmaster Tools</li>
                      </ul>
                      <div className="p-25px-t">
                        <a
                          className="m-btn m-btn-theme m-btn-radius w-100"
                          href="#start"
                        >
                          Let's Start
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Section */}
          {/* Section */}
          <section className="gray-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 min-h-350px z-index-1">
                  <div className="p-50px-tb p-50px-r d-flex align-items-center h-100">
                    <div>
                      <h1 className="display-4 font-w-700 white-color">
                        Engage your customers.{" "}
                      </h1>
                      <p className="lead white-color-light">
                        We help to create strategies, design & development.
                      </p>
                      <div className="p-20px-t">
                        <Link
                          className="m-btn m-btn-radius m-btn-white"
                          to="/about"
                        >
                          <span className="m-btn-inner-text">
                            More About Us
                          </span>
                          <span className="m-btn-inner-icon arrow"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mask-50vw left parallax"
                    style={{
                      backgroundImage: "url(assets/img/1000x1000.jpg)",
                    }}
                  >
                    <div className="mask opacity-8 dark-bg"></div>
                  </div>
                </div>
                <div className="col-lg-5 ml-auto align-self-center p-100px-tb lg-p-50px-tb">
                  <div
                    className="owl-carousel owl-nav-arrow-bottom"
                    data-items="1"
                    data-nav-arrow="true"
                    data-nav-dots="false"
                    data-md-items="1"
                    data-sm-items="1"
                    data-xs-items="1"
                    data-xx-items="1"
                    data-space="0"
                    data-autoplay="true"
                  >
                    <div className="m-30px-b">
                      <div className="avatar-100 border-radius-50 d-inline-block m-20px-b">
                        <img src={"assets/img/500x500.jpg"} title="" alt="" />
                      </div>
                      <h6 className="font-2">Customer Support</h6>
                      <p>
                        I wanted to move from Wordpress to an HTML site for page
                        load speed reasons. After looking at a dozen packages, I
                        decided "Tony" had what I needed.
                      </p>
                      <div>
                        <h6>Dick Grayson</h6>
                        <span>Co-founder, pxdraft</span>
                      </div>
                    </div>
                    <div className="m-30px-b">
                      <div className="avatar-100 border-radius-50 d-inline-block m-20px-b">
                        <img src={"assets/img/500x500.jpg"} title="" alt="" />
                      </div>
                      <h6 className="font-2">Customer Support</h6>
                      <p>
                        I wanted to move from Wordpress to an HTML site for page
                        load speed reasons. After looking at a dozen packages, I
                        decided "Tony" had what I needed.
                      </p>
                      <div>
                        <h6>Dick Grayson</h6>
                        <span>Co-founder, pxdraft</span>
                      </div>
                    </div>
                    <div className="m-30px-b">
                      <div className="avatar-100 border-radius-50 d-inline-block m-20px-b">
                        <img src={"assets/img/500x500.jpg"} title="" alt="" />
                      </div>
                      <h6 className="font-2">Customer Support</h6>
                      <p>
                        I wanted to move from Wordpress to an HTML site for page
                        load speed reasons. After looking at a dozen packages, I
                        decided "Tony" had what I needed.
                      </p>
                      <div>
                        <h6>Dick Grayson</h6>
                        <span>Co-founder, pxdraft</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Section */}
          {/* Section */}
          <div className="section">
            <div className="container">
              <div className="form-row">
                <div className="col-4 col-sm-2 m-5px-tb">
                  <div className="p12">
                    <img src={"assets/img/300x100.jpg"} title="" alt="" />
                  </div>
                </div>
                <div className="col-4 col-sm-2 m-5px-tb">
                  <div className="p12">
                    <img src={"assets/img/300x100.jpg"} title="" alt="" />
                  </div>
                </div>
                <div className="col-4 col-sm-2 m-5px-tb">
                  <div className="p12">
                    <img src={"assets/img/300x100.jpg"} title="" alt="" />
                  </div>
                </div>
                <div className="col-4 col-sm-2 m-5px-tb">
                  <div className="p12">
                    <img src={"assets/img/300x100.jpg"} title="" alt="" />
                  </div>
                </div>
                <div className="col-4 col-sm-2 m-5px-tb">
                  <div className="p12">
                    <img src={"assets/img/300x100.jpg"} title="" alt="" />
                  </div>
                </div>
                <div className="col-4 col-sm-2 m-5px-tb">
                  <div className="p12">
                    <img src={"assets/img/300x100.jpg"} title="" alt="" />
                  </div>
                </div>
                <div className="col-4 col-sm-2 m-5px-tb">
                  <div className="p12">
                    <img src={"assets/img/300x100.jpg"} title="" alt="" />
                  </div>
                </div>
                <div className="col-4 col-sm-2 m-5px-tb">
                  <div className="p12">
                    <img src={"assets/img/300x100.jpg"} title="" alt="" />
                  </div>
                </div>
                <div className="col-4 col-sm-2 m-5px-tb">
                  <div className="p12">
                    <img src={"assets/img/300x100.jpg"} title="" alt="" />
                  </div>
                </div>
                <div className="col-4 col-sm-2 m-5px-tb">
                  <div className="p12">
                    <img src={"assets/img/300x100.jpg"} title="" alt="" />
                  </div>
                </div>
                <div className="col-4 col-sm-2 m-5px-tb">
                  <div className="p12">
                    <img src={"assets/img/300x100.jpg"} title="" alt="" />
                  </div>
                </div>
                <div className="col-4 col-sm-2 m-5px-tb">
                  <div className="p12">
                    <img src={"assets/img/300x100.jpg"} title="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Section */}
          {/* Section */}
          <section className="section gray-bg">
            <div className="container">
              <div className="row justify-content-center md-m-25px-b m-40px-b">
                <div className="col-lg-8 text-center">
                  <h3 className="h1 m-15px-b">Publish what you think.</h3>
                  <p className="m-0px font-2">
                    Raino is a HTML5 template based on Sass and Bootstrap 4 with
                    modern and creative multipurpose design you can use it as a
                    startups.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 m-15px-tb">
                  <div className="card blog-grid-1">
                    <div className="blog-img">
                      <a href="#date">
                        <img src={"assets/img/900x550.jpg"} title="" alt="" />
                      </a>
                      <span className="date">
                        25 <span>April</span>
                      </span>
                    </div>
                    <div className="card-body blog-info">
                      <h5>
                        <a href="#body">
                          I like the body. I like to design everything to do
                          with the body.
                        </a>
                      </h5>
                      <p className="m-0px">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum text...
                      </p>
                      <div className="btn-bar">
                        <a className="m-link-theme" href="#read">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 m-15px-tb">
                  <div className="card blog-grid-1">
                    <div className="blog-img">
                      <a href="#date">
                        <img src={"assets/img/900x550.jpg"} title="" alt="" />
                      </a>
                      <span className="date">
                        25 <span>April</span>
                      </span>
                    </div>
                    <div className="card-body blog-info">
                      <h5>
                        <a href="#body">
                          I like the body. I like to design everything to do
                          with the body.
                        </a>
                      </h5>
                      <p className="m-0px">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum text...
                      </p>
                      <div className="btn-bar">
                        <a className="m-link-theme" href="#readmore">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 m-15px-tb">
                  <div className="card blog-grid-1">
                    <div className="blog-img">
                      <a href="#date">
                        <img src={"assets/img/900x550.jpg"} title="" alt="" />
                      </a>
                      <span className="date">
                        25 <span>April</span>
                      </span>
                    </div>
                    <div className="card-body blog-info">
                      <h5>
                        <a href="#body">
                          I like the body. I like to design everything to do
                          with the body.
                        </a>
                      </h5>
                      <p className="m-0px">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum text...
                      </p>
                      <div className="btn-bar">
                        <a className="m-link-theme" href="#read">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Section */}
          {/* Section */}
          <section
            className="section bg-no-repeat bg-right-center"
            style={{
              backgroundImage: "url(assets/img/effect/map-bg-2.png)",
            }}
          >
            <div className="container">
              <div className="row md-m-25px-b m-40px-b">
                <div className="col-lg-8">
                  <h3 className="h1 m-15px-b">Need a hand?</h3>
                  <p className="m-0px font-2">
                    Raino is a HTML5 template based on Sass and Bootstrap 4 with
                    modern and creative multipurpose design you can use it as a
                    startups.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 m-15px-tb">
                  <form
                    className="rd-mailform"
                    data-form-output="form-output-global"
                    data-form-type="contact"
                    method="post"
                    action="static/plugin/mail/bat/rd-mailform.php"
                  >
                    <div className="form-row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            id="contact-name"
                            type="text"
                            name="name"
                            placeholder="Rachel Roth"
                            data-constraints="@Required"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            id="contact-email"
                            type="email"
                            name="email"
                            placeholder="name@example.com"
                            data-constraints="@Required"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            id="contact-subject"
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            data-constraints="@Required"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            id="contact-message"
                            name="message"
                            rows="3"
                            placeholder="Hi there, I would like to ..."
                            data-constraints="@Required"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="m-btn m-btn-theme m-btn-radius w-100"
                          type="submit"
                          name="send"
                        >
                          Get Started
                        </button>
                        <div
                          className="snackbars"
                          id="form-output-global"
                        ></div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-lg-5 m-15px-tb ml-auto">
                  <h5 className="m-20px-b body-color">Reach out now!</h5>
                  <div className="h1 theme-color"></div>
                  <div className="media align-items-center p-10px-tb">
                    <div className="icon-40 theme-bg-alt border-radius-50 theme-color">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="media-body p-15px-l">
                      <h6 className="h4 m-0px">+01 856 965 8595</h6>
                    </div>
                  </div>
                  <div className="media align-items-center p-10px-tb">
                    <div className="icon-40 theme-bg-alt border-radius-50 theme-color">
                      <i className="fas fa-map"></i>
                    </div>
                    <div className="media-body p-15px-l">
                      <h6 className="h4 m-0px">
                        301 The Greenhouse, Custard Factory, LD, E2 8DY.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Section */}
        </main>
        {/* End Main */}
      </div>
    );
  }
}

export default Home;
