export default function Header() {
  return (
    <div className="container-fluid nav-bar p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
        <a href className="navbar-brand p-0">
          <h1 className="display-5 text-secondary m-0">
            <img src="brand-logo.png" className="img-fluid" alt="image" />
            Travisa
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="/" className="nav-item nav-link active">
              Home
            </a>
            <a href="/about-us" className="nav-item nav-link">
              About
            </a>
            {/* Temporary Visa dropdown */}
            <div className="nav-item dropdown">
              <a
                href="temporary-residency-visa"
                className="nav-link"
                data-bs-toggle="dropdown"
              >
                <span className="dropdown-toggle">Temporary Visa</span>
              </a>
              <div className="dropdown-menu m-0">
                <a href="visitor-visa-subclass-600" className="dropdown-item">
                  Visitor/ Holiday Visa Subclass 600
                </a>
                <a
                  href="temporary-skill-shortage-482-visa"
                  className="dropdown-item"
                >
                  Temporary Skill Shortage Visa Subclass 482
                </a>
                <a
                  href="subclass-485-temporary-graduate-visa-australia"
                  className="dropdown-item"
                >
                  Subclass 485 Temporary Graduate Visa Australia
                </a>
              </div>
            </div>
            {/* Migration dropdown */}
            <div className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <span className="dropdown-toggle">Migration</span>
              </a>
              <div className="dropdown-menu">
                {/* Sub menu - Skilled Nominated Visas  */}
                <div className="dropend">
                  <a
                    className="dropdown-item"
                    href="australia-skilled-visa"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="true"
                    aria-expanded="false"
                  >
                    <span className="dropdown-toggle">
                      Skilled Nominated Visas
                    </span>
                  </a>
                  <div className="dropdown-menu">
                    <a
                      className="dropdown-item"
                      href="skilled-independent-visa-189"
                    >
                      Subclass 190 Skilled Nominated Visa
                    </a>
                    <a className="dropdown-item" href="subclass-190-visa">
                      Subclass 485 Temporary Graduate Visa Australia
                    </a>
                  </div>
                </div>
                {/* End Sub menu -Skilled Nominated Visas  */}
                {/* Sub menu -Family Visas  */}
                <div className="dropend">
                  <a
                    className="dropdown-item"
                    href="family-visas"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="true"
                    aria-expanded="false"
                  >
                    <span className="dropdown-toggle">Family Visas</span>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="parent-visa-australia">
                      Parent Visa Australia
                    </a>
                    <a className="dropdown-item" href="parent-visa-australia">
                      Parent Visa Australia
                    </a>
                    <a className="dropdown-item" href="partner-visa-australia">
                      Partner Visa Australia
                    </a>
                    <a
                      className="dropdown-item"
                      href="subclass-101-child-visa-australia"
                    >
                      Subclass 101- Child Visa Australia
                    </a>
                    <a
                      className="dropdown-item"
                      href="visa-300-prospective-marriage-visa"
                    >
                      Visa 300 – Prospective Marriage Visa
                    </a>
                  </div>
                </div>
                {/* End Sub menu - Family Visas  */}
                {/* Sub menu - Business Visas  */}
                <div className="dropend">
                  <a
                    className="dropdown-item"
                    href="business-visas"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="true"
                    aria-expanded="false"
                  >
                    <span className="dropdown-toggle">Business Visas</span>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="188c-business-visa">
                      188C Business Visa (Significant Investment)
                    </a>
                    <a className="dropdown-item" href="188b-business-visa">
                      188B Business Visa (Investment)
                    </a>
                    <a
                      className="dropdown-item"
                      href="subclass-188-business-innovation-and-investment-provisional-visa"
                    >
                      Subclass 188 – Business Innovation and Investment
                      (Provisional) Visa
                    </a>
                    <a
                      className="dropdown-item"
                      href="subclass-888-business-innovation-and-investment-permanent-visa"
                    >
                      Subclass 888 – Business Innovation and Investment
                      (Permanent) Visa
                    </a>
                  </div>
                </div>
                {/* End Sub menu - Business Visas */}
                {/* Sub menu - Student Visa  */}
                <div className="dropend">
                  <a
                    className="dropdown-item"
                    href="student-visa"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="true"
                    aria-expanded="false"
                  >
                    <span className="dropdown-toggle">Student Visa</span>
                  </a>
                  <div className="dropdown-menu">
                    <a
                      className="dropdown-item"
                      href="subclass-500-student-visa"
                    >
                      Subclass 500 Student Visa
                    </a>
                    <a
                      className="dropdown-item"
                      href="subclass-590-student-guardian-visa"
                    >
                      Subclass 590 Student Guardian Visa
                    </a>
                    <a
                      className="dropdown-item"
                      href="australia-student-visa-extension"
                    >
                      Australia Student Visa Extension
                    </a>
                  </div>
                </div>
                {/* End Sub menu - Student Visa */}
                <a
                  href="subclass-491-skilled-regional-provisional-visa"
                  className="dropdown-item"
                >
                  Subclass 491 Skilled Regional (Provisional) Visa
                </a>
                <a href="subclass-601-eta" className="dropdown-item">
                  Australian Tourist Visa
                </a>
                <a href="subclass-494-visa" className="dropdown-item">
                  494 Visa
                </a>
                <a href="subclass-203-refugee-visa" className="dropdown-item">
                  Australian Refugee Visa
                </a>
              </div>
            </div>
            {/* End Migration dropdown */}
            {/* Others visa's dropdown Start*/}
            <div className="nav-item dropdown">
              <a href="#" className="nav-link" data-bs-toggle="dropdown">
                <span className="dropdown-toggle">Other Visa's</span>
              </a>
              <div className="dropdown-menu m-0">
                <a
                  href="subclass-866-protection-visa"
                  className="dropdown-item"
                >
                  866 Visa – Protection Visa
                </a>
                <a href="subclass-116-carer-visa" className="dropdown-item">
                  Subclass 116 – Carer Visa
                </a>
                <a href="subclass-117-orphan-visa" className="dropdown-item">
                  Subclass 117 – Orphan Visa
                </a>
                <a
                  href="subclass-445-dependent-child-visa"
                  className="dropdown-item"
                >
                  Subclass 445 – Dependent Child Visa
                </a>
                <a
                  href="subclass-602-medical-treatment-visa"
                  className="dropdown-item"
                >
                  Subclass 602 – Medical Treatment Visa
                </a>
                <a
                  href="subclass-462-work-and-holiday-visa"
                  className="dropdown-item"
                >
                  Work and Holiday Visa Australia – 462 Visa
                </a>
                <a
                  href="subclass-417-working-holiday-visa"
                  className="dropdown-item"
                >
                  Working Holiday Visa Australia – Visa 417 for young adults
                </a>
              </div>
            </div>
            {/* Others visa's dropdown End*/}
            {/* Others visa's dropdown Start*/}
            <div className="nav-item dropdown">
              <a href="#" className="nav-link" data-bs-toggle="dropdown">
                <span className="dropdown-toggle">Resources</span>
              </a>
              <div className="dropdown-menu m-0">
                <a href="skilled-occupation-list" className="dropdown-item">
                  Skilled Occupation List
                </a>
                <a href="core-skills-occupation-list" className="dropdown-item">
                  Core Skills Occupation List (CSOL)
                </a>
                <a href="life-in-australia" className="dropdown-item">
                  Life In Australia
                </a>
              </div>
            </div>
            {/* Others visa's dropdown End*/}
            <a href="pr-points-calculator" className="nav-item nav-link">
              Pr Points Calculator
            </a>
            <a href="contact" className="nav-item nav-link">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
