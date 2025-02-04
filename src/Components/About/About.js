import React from "react";
import { Link } from "react-router-dom";
import one from './one.jpg'
const About = () => {
  return (
    <>
      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center">About Us</h2>
              <p className="text-secondary mb-5 text-center lead fs-4">
                Welcome to Elite Mobiles, your one-stop destination for the
                latest and most reliable mobile devices and accessories. We are
                dedicated to providing top-quality products, unbeatable prices,
                and exceptional customer service.
              </p>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row gy-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid rounded border border-dark"
                loading="lazy"
                src={one}
                alt="About Us"
              />
            </div>
            <div className="col-12 col-lg-6 col-xxl-6">
              <div className="row justify-content-lg-end">
                <div className="col-12 col-lg-11">
                  <div className="about-wrapper">
                    <p className="lead mb-4 mb-md-5">
                      At Elite Mobiles, we understand the importance of
                      staying connected in today's fast-paced world. That’s why
                      we offer a wide range of smartphones, tablets, and
                      accessories from the most trusted brands in the industry.
                    </p>
                    <div className="row gy-4 mb-4 mb-md-5">
                      <div className="col-12 col-md-6">
                        <div className="card border border-dark">
                          <div className="card-body p-4">
                            <h3 className="display-5 fw-bold text-primary text-center mb-2">
                              370k+
                            </h3>
                            <p className="fw-bold text-center m-0">
                             Positive Reviews
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="card border border-dark">
                          <div className="card-body p-4">
                            <h3 className="display-5 fw-bold text-primary text-center mb-2">
                              18k+
                            </h3>
                            <p className="fw-bold text-center m-0">
                             Total Sales in Last Month
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link href="#!" className="btn btn-primary bsb-btn-2xl">
                      Explore
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-right-short"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
