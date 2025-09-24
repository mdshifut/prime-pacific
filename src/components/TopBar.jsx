const TopBar = () => {
  return (
    <div className="container-fluid bg-primary px-5 d-none d-lg-block">
      <div className="row gx-0 align-items-center justify-content-between">
        <div className="col-lg-5 text-center text-lg-start mb-lg-0">
          <div className="d-flex">
            <a href="#" className="text-white me-4">
              <i className="fas fa-envelope text-secondary me-2" />
              Example@gmail.com
            </a>
            <a href="#" className="text-white me-0">
              <i className="fas fa-phone-alt text-secondary me-2" />
              +01234567890
            </a>
          </div>
        </div>
        <div className="col-lg-3 text-end mb-2 mb-lg-0">
          <div
            className="d-inline-flex align-items-center"
            style={{ height: 45 }}
          >
            <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2">
              <i className="fab fa-twitter fw-normal text-secondary" />
            </a>
            <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2">
              <i className="fab fa-facebook-f fw-normal text-secondary" />
            </a>
            <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2">
              <i className="fab fa-linkedin-in fw-normal text-secondary" />
            </a>
            <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2">
              <i className="fab fa-instagram fw-normal text-secondary" />
            </a>
            <a className="btn btn-sm btn-outline-light btn-square rounded-circle">
              <i className="fab fa-youtube fw-normal text-secondary" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
