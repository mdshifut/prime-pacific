import React from "react";

const Breadcrumb = ({ title, items = [] }) => {
  return (
    <div className="container-fluid bg-breadcrumb">
      <div className="container text-center py-5" style={{ maxWidth: 900 }}>
        <h3
          className="text-white display-3 mb-4 wow fadeInDown"
          data-wow-delay="0.1s"
        >
          {title}
        </h3>
        <ol
          className="breadcrumb justify-content-center text-white mb-0 wow fadeInDown"
          data-wow-delay="0.3s"
        >
          {items.map((item, index) =>
            !item.active ? (
              <li key={index} className="breadcrumb-item">
                <a href={item.href} className="text-white">
                  {item.label}
                </a>
              </li>
            ) : (
              <li className="breadcrumb-item active text-secondary" key={index}>
                {item.label}
              </li>
            )
          )}
        </ol>
      </div>
    </div>
  );
};

export default Breadcrumb;
