import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "./ContactForm";
export const metadata = {
  title: "Contact | Prime Pacific Consultancy",
  description:
    "Contact Prime Pacific Consultancy for expert migration and visa advice. Get in touch with our team today.",
};

const AboutUs = () => {
  return (
    <>
      <Breadcrumb
        title={"Contact Us"}
        items={[
          { label: "Home", href: "/" },
          { label: "Contact Us", active: true },
        ]}
      />
      <div className="container-fluid contact overflow-hidden py-5">
        <div className="container py-5">
          <div className="row g-5 mb-5">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="sub-style">
                <h5 className="sub-title text-primary pe-3">Quick Contact</h5>
              </div>
              <h1 className="display-5 mb-4">
                Have Questions? Don't Hesitate to Contact Us
              </h1>
              <p className="mb-5">
                Have questions about your visa options or need expert guidance?
                Our friendly consultants are here to help you take the next step
                toward your Australian dream. Whether you’re planning to study,
                work, invest, or settle in Australia, we’ll provide clear advice
                and personalized support.
              </p>
              <p>
                Reach out to us today — let’s turn your migration goals into
                reality.
              </p>
              <div className="d-flex border-bottom mb-4 pb-4">
                <i className="fas fa-map-marked-alt fa-4x text-primary bg-light p-3 rounded" />
                <div className="ps-3">
                  <h5>Location</h5>
                  <p>10 Bridge Street, Granville, NSW-2142, Australia</p>
                </div>
              </div>
              <div className="row g-3">
                <div className="col-xl-6">
                  <div className="d-flex">
                    <i className="fas fa-tty fa-3x text-primary" />
                    <div className="ps-3">
                      <h5 className="mb-3">Quick Contact</h5>
                      <div className="mb-3">
                        <h6 className="mb-0">Phone:</h6>
                        <a href="#" className="fs-5 text-primary">
                          +61 406 093 752
                        </a>
                      </div>
                      <div className="mb-3">
                        <h6 className="mb-0">Email:</h6>
                        <a
                          href="#"
                          className="fs-5 text-primary"
                          style={{ wordBreak: "break-all" }}
                        >
                          admin@primepacificconsultancy.com.au
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="d-flex">
                    <i className="fas fa-clone fa-3x text-primary" />
                    <div className="ps-3">
                      <h5 className="mb-3">Opening Hrs</h5>
                      <div className="mb-3">
                        <h6 className="mb-0">Mon - Friday:</h6>
                        <a href="#" className="fs-5 text-primary">
                          09.00 am to 07.00 pm
                        </a>
                      </div>
                      <div className="mb-3">
                        <h6 className="mb-0">Satday:</h6>
                        <a href="#" className="fs-5 text-primary">
                          10.00 am to 05.00 pm
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center pt-3">
                <div className="me-4">
                  <div
                    className="bg-light d-flex align-items-center justify-content-center"
                    style={{ width: 90, height: 90, borderRadius: 10 }}
                  >
                    <i className="fas fa-share fa-3x text-primary" />
                  </div>
                </div>
                <div className="d-flex">
                  <a
                    className="btn btn-secondary border-secondary me-2 p-0"
                    href
                  >
                    facebook <i className="fas fa-chevron-circle-right" />
                  </a>
                  <a
                    className="btn btn-secondary border-secondary mx-2 p-0"
                    href
                  >
                    twitter <i className="fas fa-chevron-circle-right" />
                  </a>
                  <a
                    className="btn btn-secondary border-secondary mx-2 p-0"
                    href
                  >
                    instagram <i className="fas fa-chevron-circle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3">
              <div className="sub-style">
                <h5 className="sub-title text-primary pe-3">Let’s Connect</h5>
              </div>
              <h1 className="display-5 mb-4">Send Your Message</h1>
              <p className="mb-3">
                Have a question or need visa assistance? Fill out the form below
                and our team will get back to you shortly with the guidance you
                need.
              </p>
              <ContactForm />
            </div>
          </div>
          <div className="office pt-5">
            <div
              className="section-title text-center mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="sub-style">
                <h5 className="sub-title text-primary px-3">Come Say Hello</h5>
              </div>
              <h1 className="display-5 mb-4">Explore Our Office</h1>
              <p className="mb-0">
                Visit us at our office to discuss your visa plans in person. Our
                team is ready to welcome you, answer your questions, and guide
                you through every step of your migration journey.
              </p>
            </div>
            <div className="row g-4 justify-content-center">
              <div className="col-12 pt-5 wow zoomIn" data-wow-delay="0.1s">
                <div className="rounded h-100">
                  <iframe
                    className="rounded w-100"
                    style={{ height: 500 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.2551252436406!2d151.00817287728896!3d-33.83153067324093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a32e4864b2ab%3A0x1a13c6f1c5d8e437!2s10%20Bridge%20St%2C%20Granville%20NSW%202142%2C%20Australia!5e0!3m2!1sen!2sbd!4v1759900893756!5m2!1sen!2sbd"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
