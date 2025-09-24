import React from "react";

const ServicesOverview = () => {
  return (
    <div className="container-fluid py-5 bg-dark text-white services-overview-section">
      <div className="container">
        <div className="row text-center align-items-stretch">
          <div className="services-content-col col-lg-4 d-flex flex-column justify-content-center">
            <div className="services-content">
              <h1 className="display fw-bold mb-2">01</h1>
              <h4 className="fw-bold">Expert Guidance</h4>
              <p className="mb-0">
                Get reliable advice from MARA certified professionals every step
                of your migration journey.
              </p>
            </div>
          </div>
          <div className="services-content-col col-lg-4 d-flex flex-column justify-content-center">
            <div className="services-content">
              <h1 className="display fw-bold mb-2">02</h1>
              <h4 className="fw-bold">Tailored Solutions</h4>
              <p className="mb-0">
                We create customized visa strategies that fit your goals and
                personal circumstances.
              </p>
            </div>
          </div>
          <div className="services-content-col col-lg-4 d-flex flex-column justify-content-center">
            <div className="services-content">
              <h1 className="display fw-bold mb-2">03</h1>
              <h4 className="fw-bold">Hassle-Free Process</h4>
              <p className="mb-0">
                From paperwork to lodgement, we make the visa process smooth and
                simple.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
