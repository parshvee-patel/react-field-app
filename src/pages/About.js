import React, { Component } from "react";

//Custom File Import
import Footer from "../components/Footer";
import PageHeader from "./PageHeader";

class About extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        {/* Main */}
        <main>
          {/* Page Title */}
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
                  <h1 className="display-4 white-color m-0px">About us</h1>
                </div>
              </div>
            </div>
          </section>
          {/* End Page Title */}
          {/* Section */}
          <section className="section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 m-15px-tb">
                  <h6 className="theme-color m-10px-b">
                    Wide range of web development services
                  </h6>
                  <h2 className="h2 m-20px-b">
                    We know that good design means good business.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="p-10px-t">
                    <a
                      className="m-btn m-btn-radius m-btn-theme"
                      href="#service"
                    >
                      <span className="m-btn-inner-text">Our Services</span>
                      <span className="m-btn-inner-icon arrow"></span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-7 m-15px-tb">
                  <div className="row">
                    <div className="col-6">
                      <div className="overflow-hidden border-radius-5 box-shadow">
                        <img src={"assets/img/1600x900.jpg"} title="" alt="" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="overflow-hidden border-radius-5 box-shadow">
                        <img src={"assets/img/1600x900.jpg"} title="" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Home Banner */}
          {/* Section */}
          <section>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 gray-bg">
                  <div className="p7">
                    <h2 className="h1 m-20px-b">
                      Stay focused on your business. Let us handle the design.
                    </h2>
                    <p className="lead">
                      We are committed to customers success from start to
                      finish.
                    </p>
                    <div className="row p-20px-t">
                      <div className="col-xl-6 col-lg-12 col-md-6 m-15px-tb">
                        <div className="media">
                          <div className="only-icon-50 theme-color">
                            <i className="icon-tools"></i>
                          </div>
                          <div className="media-body p-15px-l">
                            <h6>Pixel Perfect Design</h6>
                            <p className="m-0px">
                              Lorem Ipsum is simply text of the printing and
                              typesetting industry. Lorem Ipsum has been
                              standard dummy.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-6 m-15px-tb">
                        <div className="media">
                          <div className="only-icon-50 theme-color">
                            <i className="icon-layers"></i>
                          </div>
                          <div className="media-body p-15px-l">
                            <h6>Full Documentation</h6>
                            <p className="m-0px">
                              Lorem Ipsum is simply text of the printing and
                              typesetting industry. Lorem Ipsum has been
                              standard dummy.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-6 m-15px-tb">
                        <div className="media">
                          <div className="only-icon-50 theme-color">
                            <i className="icon-scissors"></i>
                          </div>
                          <div className="media-body p-15px-l">
                            <h6>Reasonable Pricing</h6>
                            <p className="m-0px">
                              Lorem Ipsum is simply text of the printing and
                              typesetting industry. Lorem Ipsum has been
                              standard dummy.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-6 m-15px-tb">
                        <div className="media">
                          <div className="only-icon-50 theme-color">
                            <i className="icon-lock"></i>
                          </div>
                          <div className="media-body p-15px-l">
                            <h6>User-friendly Admin</h6>
                            <p className="m-0px">
                              Lorem Ipsum is simply text of the printing and
                              typesetting industry. Lorem Ipsum has been
                              standard dummy.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 min-h-350px bg-center bg-cover"
                  style={{ backgroundImage: "url(assets/img/1000x1000.jpg)" }}
                ></div>
              </div>
            </div>
          </section>
          {/* End Section */}
          {/* Section */}
          <section className="counter section">
            <div className="container">
              <div className="row">
                <div className="col-6 col-lg-3 col-md-6 m-15px-tb">
                  <div className="border-all-1 border-color-gray white-bg line-hover p-15px-lr p-25px-tb border-radius-5 text-center">
                    <div className="only-icon-70 d-inline-block m-10px-b">
                      <i className="icon-desktop"></i>
                    </div>
                    <h6
                      className="count h3 m-5px-b"
                      data-to="4506"
                      data-speed="4506"
                    >
                      4506
                    </h6>
                    <span>Happy Clients</span>
                  </div>
                </div>
                <div className="col-6 col-lg-3 col-md-6 m-15px-tb">
                  <div className="border-all-1 border-color-gray white-bg line-hover p-15px-lr p-25px-tb border-radius-5 text-center">
                    <div className="only-icon-70 d-inline-block m-10px-b">
                      <i className="icon-camera"></i>
                    </div>
                    <h6
                      className="count h3 m-5px-b"
                      data-to="1580"
                      data-speed="1580"
                    >
                      1580
                    </h6>
                    <span>Photo Capture</span>
                  </div>
                </div>
                <div className="col-6 col-lg-3 col-md-6 m-15px-tb">
                  <div className="border-all-1 border-color-gray white-bg line-hover p-15px-lr p-25px-tb border-radius-5 text-center">
                    <div className="only-icon-70 d-inline-block m-10px-b">
                      <i className="icon-laptop"></i>
                    </div>
                    <h6
                      className="count h3 m-5px-b"
                      data-to="1280"
                      data-speed="1280"
                    >
                      1280
                    </h6>
                    <span>Projects</span>
                  </div>
                </div>
                <div className="col-6 col-lg-3 col-md-6 m-15px-tb">
                  <div className="border-all-1 border-color-gray white-bg line-hover p-15px-lr p-25px-tb border-radius-5 text-center">
                    <div className="only-icon-70 d-inline-block m-10px-b">
                      <i className="icon-chat"></i>
                    </div>
                    <h6
                      className="count h3 m-5px-b"
                      data-to="9642"
                      data-speed="9642"
                    >
                      9642
                    </h6>
                    <span>Clients call</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Section */}
          {/* Section */}
          <div
            className="parallax full-screen"
            style={{ backgroundImage: "url(assets/img/1600x900.jpg)" }}
          ></div>
          {/* End Section */}
          {/* Section */}
          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 m-15px-tb">
                  <div className="card card-body box-shadow-lg hover-top">
                    <div className="media m-20px-b">
                      <div className="only-icon-70 theme-color font-w-700">
                        01.
                      </div>
                      <div className="media-body p-15px-l  border-left m-15px-l">
                        <h6 className="h5 m-0px">
                          Creativity. <br /> Discover talent
                        </h6>
                      </div>
                    </div>
                    <p className="m-0px">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since. Lorem Ipsum has been the
                      industry.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 m-15px-tb">
                  <div className="card card-body box-shadow-lg hover-top theme-bg">
                    <div className="media m-20px-b">
                      <div className="only-icon-70 white-color font-w-700">
                        02.
                      </div>
                      <div className="media-body p-15px-l  border-left-1 border-color-white-alt m-15px-l">
                        <h6 className="h5 m-0px white-color">
                          Technology.
                          <br /> Expert analysis
                        </h6>
                      </div>
                    </div>
                    <p className="m-0px white-color-light">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since. Lorem Ipsum has been the
                      industry.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 m-15px-tb">
                  <div className="card card-body box-shadow-lg hover-top">
                    <div className="media m-20px-b">
                      <div className="only-icon-70 theme-color font-w-700">
                        03.
                      </div>
                      <div className="media-body p-15px-l  border-left m-15px-l">
                        <h6 className="h5 m-0px">
                          Discover.
                          <br /> Explore work
                        </h6>
                      </div>
                    </div>
                    <p className="m-0px">
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
          {/* End Section */}
          {/* Section */}
          <section
            className="section effect-section parallax"
            style={{ backgroundImage: "url(assets/img/1000x1000.jpg)" }}
          >
            <div className="mask black-bg opacity-6"></div>
            <div className="container">
              <div className="row screen-65 justify-content-center align-items-center">
                <div className="col-lg-8 text-center">
                  <h6 className="white-color-light font-w-400">
                    About Digital Agency
                  </h6>
                  <h2 className="white-color font-w-400">
                    We always stay with our clients and respect their business.
                    we deliver 100% and provide instant response to help them
                    succeed in constantly changing and challenging business
                    world.
                  </h2>
                  <div className="p-25px-t">
                    <a
                      href="#portfolio"
                      className="m-btn m-btn-radius m-btn-white"
                    >
                      Latest Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Section */}
          {/* Section */}
          <div className="section">
            <div className="container">
              <div className="row separated">
                <div className="col-6 col-lg-3">
                  <div className="md-p-20px p-40px text-center">
                    <img src={"assets/img/300x100.jpg"} title="" alt="" />
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="md-p-20px p-40px text-center">
                    <img src={"assets/img/300x100.jpg"} title="" alt="" />
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="md-p-20px p-40px text-center">
                    <img src={"assets/img/300x100.jpg"} title="" alt="" />
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="md-p-20px p-40px text-center">
                    <img src={"assets/img/300x100.jpg"} title="" alt="" />
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="md-p-20px p-40px text-center">
                    <img src={"assets/img/300x100.jpg"} title="" alt="" />
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="md-p-20px p-40px text-center">
                    <img src={"assets/img/300x100.jpg"} title="" alt="" />
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="md-p-20px p-40px text-center">
                    <img src={"assets/img/300x100.jpg"} title="" alt="" />
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="md-p-20px p-40px text-center">
                    <img src={"assets/img/300x100.jpg"} title="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Section */}
          {/* Section */}
          <section className="p-50px-t gray-bg">
            <div className="container">
              <div className="row flex-row-reverse">
                <div className="col-lg-6 m-30px-b align-self-center">
                  <div className="only-icon-50 theme-color m-15px-b">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <h3 className="h1 m-20px-b">
                    Design is not just what it looks like and feels like. Design
                    is how it works.
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                  <div className="p-25px-t p-10px-b">
                    <img src={"assets/img/sign.png"} title="" alt="" />
                  </div>
                  <div className="p-10px-t">
                    <h6 className="h5 m-0px">Dick Grayson</h6>
                    <span className="font-1">Chief Executive Officer</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img src={"assets/img/1000x1000.jpg"} title="" alt="" />
                </div>
              </div>
            </div>
          </section>
          {/* End Section */}
        </main>
        {/* End Main */}
        <Footer />
      </div>
    );
  }
}

export default About;
