import React from "react";

const Services = () => {
  return (
    <div className="container-fluid counter-facts py-5">
      <div className="container py-5">
        <div className="row g-4">
          <div
            className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="counter">
              <div className="counter-icon">
                <i className="fas fa-calendar-week" />
              </div>
              <div className="counter-content">
                <h3>24-Hour Turnaround Time</h3>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="counter">
              <div className="counter-icon">
                <i className="fas fa-clock" />
              </div>
              <div className="counter-content">
                <h3>4-Hour Response Time</h3>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="counter">
              <div className="counter-icon">
                <i className="fas fa-user-check" />
              </div>
              <div className="counter-content">
                <h3>Experienced Problem Solvers</h3>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.7s"
          >
            <div className="counter">
              <div className="counter-icon">
                <i className="fas fa-calendar-check" />
              </div>
              <div className="counter-content">
                <h3>Weekend or Evening Not a Problem</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
