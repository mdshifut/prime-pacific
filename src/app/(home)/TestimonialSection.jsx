"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

const testimonialsData = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.",
    image: "testimonial-1.jpg",
    name: "Person Name",
    profession: "Profession",
    stars: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.",
    image: "testimonial-2.jpg",
    name: "Person Name",
    profession: "Profession",
    stars: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.",
    image: "testimonial-3.jpg",
    name: "Person Name",
    profession: "Profession",
    stars: 5,
  },
];

const TestimonialItem = ({ text, image, name, profession, stars }) => (
  <div className="testimonial-item">
    <div className="testimonial-content p-4 mb-5">
      <p className="fs-5 mb-0">{text}</p>
      <div className="d-flex justify-content-end">
        {[...Array(stars)].map((_, i) => (
          <i key={i} className="fas fa-star text-secondary" />
        ))}
      </div>
    </div>
    <div className="d-flex">
      <div className="rounded-circle me-4" style={{ width: 100, height: 100 }}>
        <img className="img-fluid rounded-circle" src={image} alt="img" />
      </div>
      <div className="my-auto">
        <h5>{name}</h5>
        <p className="mb-0">{profession}</p>
      </div>
    </div>
  </div>
);

const TestimonialSection = () => {
  return (
    <div className="container-fluid testimonial overflow-hidden pb-5">
      <div className="container py-5">
        <div
          className="section-title text-center mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="sub-style">
            <h5 className="sub-title text-primary px-3">OUR CLIENTS RIVIEWS</h5>
          </div>
          <h1 className="display-5 mb-4">What Our Clients Say</h1>
          <p className="mb-0">
            Hear directly from our clients about their successful visa journeys.
            Their stories reflect our commitment, expertise, and the real
            results we deliver.
          </p>
        </div>
        <Slider
          {...settings}
          className=" testimonial-carousel wow zoomInDown"
          data-wow-delay="0.2s"
        >
          {testimonialsData.map((testimonial, idx) => (
            <TestimonialItem key={idx} {...testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;
