import React from "react";
import FormatContent from "./FormatContent";

const FeatureContent = ({
  className,
  subTitle,
  title,
  description = [],
  img1,
  img2,
  rightImage,
  showContactButton,
}) => {
  return (
    <div className={`container-fluid py-5 featureContent ${className}`}>
      <div className="container py-5">
        <div className="row g-5">
          {/* Image Column */}
          <div
            className={`col-xl-5 wow fadeInLeft ${
              rightImage ? "order-xl-2 order-2" : "order-xl-1 order-1"
            }`}
            data-wow-delay="0.1s"
          >
            <div className="bg-light rounded featureContent_img-wrapper">
              <img
                src={img1}
                className="img-fluid w-100 featureContent_img"
                style={{ marginBottom: "-7px" }}
                alt="Image"
              />
              {img2 && (
                <img
                  src={img2}
                  className="img-fluid w-100 border-bottom border-5 border-primary"
                  style={{
                    borderTopRightRadius: 300,
                    borderTopLeftRadius: 300,
                  }}
                  alt="Image"
                />
              )}
            </div>
          </div>
          {/* Content Column */}
          <div
            className={`col-xl-7 wow fadeInRight d-flex align-items-center ${
              rightImage ? "order-xl-1 order-1" : "order-xl-2 order-2"
            }`}
            data-wow-delay="0.3s"
          >
            <div>
              <h5 className="sub-title pe-3">{subTitle}</h5>
              <h1 className="display-5 mb-4">{title}</h1>

              {description.map((desc, index) => (
                <FormatContent key={index} content={desc} />
              ))}

              {showContactButton && (
                <a
                  className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp"
                  data-wow-delay="0.1s"
                  href="/contact"
                >
                  Contact Us
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureContent;

typeof FeatureContent === "string";
