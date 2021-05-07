import React, { Component } from "react";
import { Link } from "react-router-dom";

//Custom File Import
import PageHeader from "./PageHeader";

class Services extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        {/* Main */}
        <main>
          {/* Home Banner */}
          <section
            className="section parallax effect-section"
            style={{ backgroundImage: "url(assets/img/1600x900.jpg)" }}
          >
            <div className="mask dark-bg opacity-8"></div>
            <div className="container position-relative">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-8 text-center">
                  <h6 className="white-color-light font-w-500">
                    We are awesome designer
                  </h6>
                  <h1 className="display-4 white-color m-0px">Services</h1>
                </div>
              </div>
            </div>
          </section>
          {/* End Home Banner */}
          {/* Section */}
          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="border-radius-5 overflow-hidden">
                    <img src={"assets/img/1600x900.jpg"} title="" alt="" />
                  </div>
                </div>
              </div>
              <div className="row p-40px-t md-p-20px-t">
                <div className="col-lg-4 m-15px-tb">
                  <div className="after-50 theme-after p-20px-b">
                    <h6 className="font-1 body-color font-w-400 m-5px-b">
                      Creative
                    </h6>
                    <h5>Creative thinking & design</h5>
                    <p className="m-0px lg-width-95">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since. Lorem Ipsum has been the
                      industry.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 m-15px-tb">
                  <div className="after-50 theme-after p-20px-b">
                    <h6 className="font-1 body-color font-w-400 m-5px-b">
                      Creative
                    </h6>
                    <h5>Pixel perfect design</h5>
                    <p className="m-0px lg-width-95">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since. Lorem Ipsum has been the
                      industry.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 m-15px-tb">
                  <div className="after-50 theme-after p-20px-b">
                    <h6 className="font-1 body-color font-w-400 m-5px-b">
                      Creative
                    </h6>
                    <h5>Reasonable pricing</h5>
                    <p className="m-0px lg-width-95">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since. Lorem Ipsum has been the
                      industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Home Banner */}
          {/* Section */}
          <section className="section gray-bg">
            <div className="container">
              <div className="row justify-content-center md-m-25px-b m-45px-b">
                <div className="col-lg-8 text-center">
                  <h3 className="h1 m-15px-b">
                    Our solution for your business.
                  </h3>
                  <p className="m-0px font-2">
                    Raino is a HTML5 template based on Sass and Bootstrap 4 with
                    modern and creative multipurpose design you can use it as a
                    startups.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-lg-3 m-15px-tb">
                  <div className="p-40px-tb p-25px-lr m-auto text-center white-bg border-radius-5 hover-top">
                    <div className="icon-80 theme-bg border-radius-50 white-color d-inline-block m-20px-b">
                      <i className="icon-desktop"></i>
                    </div>
                    <h6>Web Development</h6>
                    <p className="m-0px">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 m-15px-tb">
                  <div className="p-40px-tb p-25px-lr m-auto text-center white-bg border-radius-5 hover-top">
                    <div className="icon-80 theme-bg border-radius-50 white-color d-inline-block m-20px-b">
                      <i className="icon-tools"></i>
                    </div>
                    <h6>Pixel Perfect Design</h6>
                    <p className="m-0px">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 m-15px-tb">
                  <div className="p-40px-tb p-25px-lr m-auto text-center white-bg border-radius-5 hover-top">
                    <div className="icon-80 theme-bg border-radius-50 white-color d-inline-block m-20px-b">
                      <i className="icon-mobile"></i>
                    </div>
                    <h6>Mobile Friendly</h6>
                    <p className="m-0px">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 m-15px-tb">
                  <div className="p-40px-tb p-25px-lr m-auto text-center white-bg border-radius-5 hover-top">
                    <div className="icon-80 theme-bg border-radius-50 white-color d-inline-block m-20px-b">
                      <i className="icon-scissors"></i>
                    </div>
                    <h6>Reasonable Pricing</h6>
                    <p className="m-0px">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 m-15px-tb">
                  <div className="p-40px-tb p-25px-lr m-auto text-center white-bg border-radius-5 hover-top">
                    <div className="icon-80 theme-bg border-radius-50 white-color d-inline-block m-20px-b">
                      <i className="icon-profile-male"></i>
                    </div>
                    <h6>User Friendly</h6>
                    <p className="m-0px">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 m-15px-tb">
                  <div className="p-40px-tb p-25px-lr m-auto text-center white-bg border-radius-5 hover-top">
                    <div className="icon-80 theme-bg border-radius-50 white-color d-inline-block m-20px-b">
                      <i className="icon-lock"></i>
                    </div>
                    <h6>User-friendly Admin</h6>
                    <p className="m-0px">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 m-15px-tb">
                  <div className="p-40px-tb p-25px-lr m-auto text-center white-bg border-radius-5 hover-top">
                    <div className="icon-80 theme-bg border-radius-50 white-color d-inline-block m-20px-b">
                      <i className="icon-speedometer"></i>
                    </div>
                    <h6>Social Marketing</h6>
                    <p className="m-0px">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 m-15px-tb">
                  <div className="p-40px-tb p-25px-lr m-auto text-center white-bg border-radius-5 hover-top">
                    <div className="icon-80 theme-bg border-radius-50 white-color d-inline-block m-20px-b">
                      <i className="icon-bike"></i>
                    </div>
                    <h6>Content Creation</h6>
                    <p className="m-0px">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Section */}
          {/* Section */}
          <section className="section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 m-15px-tb">
                  <img src={"assets/img/1000x1000.jpg"} title="" alt="" />
                </div>
                <div className="col-lg-6 m-15px-tb">
                  <div className="p-45px-l lg-p-0px-l">
                    <h3 className="h2 m-15px-b">
                      Stay focused on your business. Let us handle the design.
                    </h3>
                    <p className="lead">
                      Beautiful and easy to use UI, professional animations and
                      drag &amp; drop feature.
                    </p>
                    <ul className="list-type-03">
                      <li>
                        Beautiful and easy to understand UI, professional
                        animations
                      </li>
                      <li>
                        Theme advantages are pixel perfect design &amp; clear
                        code delivered
                      </li>
                      <li>
                        Present your services with flexible, convenient and
                        multipurpose
                      </li>
                      <li>Find more creative ideas for your projects</li>
                      <li>Unlimited power and customization possibilities</li>
                    </ul>
                    <div className="p-20px-t">
                      <Link
                        className="m-btn m-btn-radius m-btn-theme m-10px-r"
                        to="/about"
                      >
                        <span className="m-btn-inner-text">More About</span>
                        <span className="m-btn-inner-icon arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Section */}
          {/* Section */}
          <section>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-4 dark-bg">
                  <div className="p12 md-p-0px-lr white-color">
                    <h6 className="font-1 font-w-500 m-10px-b">
                      Build perfect websites
                    </h6>
                    <h5 className="m-20px-b h3">
                      Raino is a Bootstrap 4 based creative multipurpose HTML5
                      template
                    </h5>
                    <p className="white-color-light">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since. Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's standard dummy text ever
                      since.
                    </p>
                    <div className="p-20px-t">
                      <a
                        className="m-btn m-btn-radius m-btn-white m-btn-sm"
                        href="#work"
                      >
                        <span className="m-btn-inner-text">Explore Work</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 bg-cover bg-no-repeat bg-center min-h-350px"
                  style={{ backgroundImage: "url(assets/img/1600x900.jpg)" }}
                ></div>
                <div className="col-lg-4 dark-bg">
                  <div className="p12 md-p-0px-lr white-color">
                    <h6 className="font-1 font-w-500 m-10px-b">
                      Build perfect websites
                    </h6>
                    <h5 className="m-20px-b h3">
                      Raino is a Bootstrap 4 based creative multipurpose HTML5
                      template
                    </h5>
                    <p className="white-color-light">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since. Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's standard dummy text ever
                      since.
                    </p>
                    <div className="p-20px-t">
                      <a
                        className="m-btn m-btn-radius m-btn-white m-btn-sm"
                        href="#work"
                      >
                        <span className="m-btn-inner-text">Explore Work</span>
                      </a>
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
                  <h3 className="h1 m-15px-b">Simple, Straight Pricing.</h3>
                  <p className="m-0px font-2">
                    Raino is a HTML5 template based on Sass and Bootstrap 4 with
                    modern and creative multipurpose design you can use it as a
                    startups.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-lg-3 m-15px-tb">
                  <div className="card box-shadow-hover hover-top white-bg">
                    <div className="p-40px-t p-20px-lr">
                      <h4 className="h1">
                        <span>$</span>49
                      </h4>
                      <p className="m-0px">Basic Package</p>
                    </div>
                    <div className="p-20px">
                      <ul className="list-type-02">
                        <li>Drag &amp; Drop Builder</li>
                        <li>Ready Templates</li>
                        <li>Blog Tools</li>
                        <li>eCommerce Store</li>
                        <li>30+ Webmaster Tools</li>
                      </ul>
                      <div className="p-20px-tb">
                        <a
                          className="m-btn m-btn-sm m-btn-theme m-btn-radius w-100"
                          href="#signup"
                        >
                          Sign Up
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 m-15px-tb">
                  <div className="card box-shadow-hover hover-top white-bg">
                    <div className="p-40px-t p-20px-lr">
                      <h4 className="h1">
                        <span>$</span>49
                      </h4>
                      <p className="m-0px">Basic Package</p>
                    </div>
                    <div className="p-20px">
                      <ul className="list-type-02">
                        <li>Drag &amp; Drop Builder</li>
                        <li>Ready Templates</li>
                        <li>Blog Tools</li>
                        <li>eCommerce Store</li>
                        <li>30+ Webmaster Tools</li>
                      </ul>
                      <div className="p-20px-tb">
                        <a
                          className="m-btn m-btn-sm m-btn-theme m-btn-radius w-100"
                          href="#signup"
                        >
                          Sign Up
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 m-15px-tb">
                  <div className="card box-shadow-hover hover-top white-bg">
                    <div className="p-40px-t p-20px-lr">
                      <h4 className="h1">
                        <span>$</span>49
                      </h4>
                      <p className="m-0px">Basic Package</p>
                    </div>
                    <div className="p-20px">
                      <ul className="list-type-02">
                        <li>Drag &amp; Drop Builder</li>
                        <li>Ready Templates</li>
                        <li>Blog Tools</li>
                        <li>eCommerce Store</li>
                        <li>30+ Webmaster Tools</li>
                      </ul>
                      <div className="p-20px-tb">
                        <a
                          className="m-btn m-btn-sm m-btn-theme m-btn-radius w-100"
                          href="#signup"
                        >
                          Sign Up
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 m-15px-tb">
                  <div className="card box-shadow-hover hover-top white-bg">
                    <div className="p-40px-t p-20px-lr">
                      <h4 className="h1">
                        <span>$</span>49
                      </h4>
                      <p className="m-0px">Basic Package</p>
                    </div>
                    <div className="p-20px">
                      <ul className="list-type-02">
                        <li>Drag &amp; Drop Builder</li>
                        <li>Ready Templates</li>
                        <li>Blog Tools</li>
                        <li>eCommerce Store</li>
                        <li>30+ Webmaster Tools</li>
                      </ul>
                      <div className="p-20px-tb">
                        <a
                          className="m-btn m-btn-sm m-btn-theme m-btn-radius w-100"
                          href="#signup"
                        >
                          Sign Up
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
        </main>
        {/* End Main */}
      </div>
    );
  }
}

export default Services;
