"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const HeroSlider = () => {
  return (
    <Slider {...settings} className="hero-carousel">
      <div className="carousel-item ">
        <img src="slide/slide1.jpg" className="img-fluid" alt="Image" />
        <div className="carousel-caption">
          <div className="text-center p-4" style={{ maxWidth: 900 }}>
            <h4
              className="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              Welcome to Prime Pacific Consultancy
            </h4>
            <h1
              className="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              Your Australian Visa Experts
            </h1>
            <p
              className="text-white mb-4 mb-md-5 fs-5 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              Start a new chapter with confidence. Our team helps you navigate
              the visa process, secure opportunities, and take the right steps
              toward a successful life in Australia
            </p>
            <a
              className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5 wow fadeInUp"
              data-wow-delay="0.7s"
              href="#about"
            >
              More Details
            </a>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src="slide/slide2.jpg" className="img-fluid" alt="Image" />
        <div className="carousel-caption">
          <div className="text-center p-4" style={{ maxWidth: 900 }}>
            <h5
              className="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              Your Dreams, Our Expertise
            </h5>
            <h1
              className="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              Start Strong In Australia
            </h1>
            <p
              className="text-white mb-4 mb-md-5 fs-5 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              We do more than process paperwork—we provide the clarity,
              confidence, and guidance you need to begin your journey toward a
              brighter future in Australia
            </p>
            <a
              className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5 wow fadeInUp"
              data-wow-delay="0.7s"
              href="#about"
            >
              More Details
            </a>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default HeroSlider;
