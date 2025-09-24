import React from "react";

const servicesData = [
  {
    title: "Regional Visa",
    image: "travel-1.jpg",
    description:
      "Discover exciting opportunities in Australia’s regional areas. The Regional Visa lets you live, work, and study in thriving communities while enjoying a clear pathway to permanent residency.",
    delay: "0.1s",
  },
  {
    title: "Business Visa",
    image: "travel-2.jpg",
    description:
      "Unlock new opportunities in Australia’s thriving economy. The Business Visa is designed for innovators, investors, and business owners who want to contribute to and benefit from Australia’s dynamic market.",
    delay: "0.3s",
  },
  {
    title: "Skilled Visa",
    image: "travel-3.jpg",
    description:
      "Turn your skills into a future in Australia. The Skilled Visa helps professionals build stable careers while supporting the country’s growing industries.",
    delay: "0.5s",
  },
  {
    title: "Students Visa",
    image: "travel-4.jpg",
    description:
      "Study in Australia’s top universities and colleges. The Student Visa helps you achieve your academic goals while preparing for global opportunities.",
    delay: "0.1s",
  },
  {
    title: "Family Visa",
    image: "travel-5.jpg",
    description:
      "Bring your family closer with the Family Visa. It ensures a secure future together while building your life in Australia.",
    delay: "0.3s",
  },
  {
    title: "Tourist Visa",
    image: "travel-6.jpg",
    description:
      "Discover Australia’s beauty and culture. The Tourist Visa is perfect for holidays, visiting loved ones, or short-term travel experiences.",
    delay: "0.5s",
  },
];

const ServiceItem = ({ title, image, description, delay }) => (
  <div className={`col-lg-6 col-xl-4 wow fadeInUp`} data-wow-delay={delay}>
    <div className="service-item">
      <div className="service-inner">
        <div className="service-img">
          <img src={image} className="img-fluid w-100 rounded" alt="Image" />
        </div>
        <div className="service-title">
          <div className="service-title-name">
            <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
              <a href="#" className="h4 text-white mb-0">
                {title}
              </a>
            </div>
          </div>
          <div className="service-content pb-4">
            <a href="#">
              <h4 className="text-white mb-4 py-3">{title}</h4>
            </a>
            <div className="px-4">
              <p className="mb-4">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="container-fluid service overflow-hidden pt-5">
      <div className="container py-5">
        <div
          className="section-title text-center mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="sub-style">
            <h5 className="sub-title text-primary px-3">Our services</h5>
          </div>
          <h1 className="display-5 mb-4">
            Australia Visa Consultants, Best Support For You
          </h1>
          <p className="mb-0">
            We guide you through every step of your visa journey with expert
            advice and trusted support. From student to work visas, we make your
            international dreams simple, smooth, and stress-free
          </p>
        </div>
        <div className="row g-4">
          {servicesData.map((service, idx) => (
            <ServiceItem key={idx} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
