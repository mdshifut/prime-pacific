import React from "react";

const SuccessSection = () => {
  return (
    <div className="container-fluid features overflow-hidden py-5 bg-light">
      <div className="container">
        <div
          className="section-title text-center mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="sub-style">
            <h5 className="sub-title text-primary px-3">Our Success</h5>
          </div>
          <h1 className="display-5 mb-4">
            Over 93% of our cases result in favorable outcomes for our clients
          </h1>
          <p className="mb-0">
            Our team of skilled Immigration consultants are dedicated to
            providing you with the best Immigration expertise you deserve.
          </p>
        </div>
        <div className="row g-4 justify-content-center text-center">
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="feature-item text-center p-4">
              <h6>100%</h6>
              <div className="feature-content d-flex flex-column">
                <h5 className="mb-3">Satisfaction Guaranteed</h5>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="feature-item text-center p-4">
              <h6>1.2 K</h6>
              <div className="feature-content d-flex flex-column">
                <h5 className="mb-3">Visa Granted</h5>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="feature-item text-center p-4">
              <h6>80%</h6>
              <div className="feature-content d-flex flex-column">
                <h5 className="mb-3">Client’s Retention</h5>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="feature-item text-center p-4">
              <h6>93%</h6>
              <div className="feature-content d-flex flex-column">
                <h5 className="mb-3">Success Rate</h5>
              </div>
            </div>
          </div>
          <div className="col-12">
            <a
              className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp"
              data-wow-delay="0.1s"
              href="/contact.html"
            >
              Book now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;
