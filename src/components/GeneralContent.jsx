import { Fragment } from "react";
import FormatContent from "./FormatContent";

const GeneralContent = ({ className, contentList = [] }) => {
  return (
    <div
      className={`container-fluid overflow-hidden py-5 generalContent ${className}`}
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-xl-12" data-wow-delay="0.3s">
            {contentList.map((content, index) => (
              <Fragment key={index}>
                <h2
                  className={`sub-title pe-3  wow fadeInLeft ${
                    index > 0 ? "mt-4" : ""
                  }`}
                  dangerouslySetInnerHTML={{ __html: content.title }}
                />
                {content?.texts?.map((text, idx) => (
                  <FormatContent key={idx} content={text} />
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralContent;
