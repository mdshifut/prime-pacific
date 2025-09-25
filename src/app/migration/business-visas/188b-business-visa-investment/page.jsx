import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import React from "react";

import GeneralContent from "@/components/GeneralContent";

export const metadata = {
  title: "188B Business Visa Investment | Prime Pacific Consultancy",
  description:
    "Information and expert guidance for the 188B Business Innovation and Investment (Provisional) visa in Australia.",
};

const BusinessVisaInvestment = () => {
  return (
    <>
      <Breadcrumb
        title={"188B Business Visa (Investment)"}
        items={[
          { label: "Home", href: "/" },
          { label: "Migration" },
          { label: "Business Visas", href: "/migration/business-visas" },
          {
            label: "188B Business Visa (Investment)",
            active: true,
          },
        ]}
      />
      <FeatureContent
        subTitle="Subclass 188B"
        title="Business Visa"
        description={[
          "The Subclass 188B Business Visa is for applicants that have been nominated by an Australian State or Territory. It is a 4-year temporary visa that is ideal for all those who would like to make a designated investment in an Australian State or Territory. This business investor visa is an ideal pathway for Permanent Residency. On maintaining an investment in Australia for a period of 4 years, the applicant can apply for Permanent Residence through the Business Innovation & Investment (Residence) SC 888 Visa.",
        ]}
        img1="/man-business.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "188b Visa Application- Requites",
            texts: [
              {
                type: "ul",
                items: [
                  "The applicant must make an investment of at least AUD1.5 million in an Australian State or Territory.",
                  "A minimum score of 65 points on the Test.",
                  "The applicant for this visa needs to be nominated by an Australian State or Territory.",
                ],
              },
            ],
          },

          {
            title: "General Requirements of 188B",
            texts: [
              {
                type: "ul",
                items: [
                  "The applicants must have personal and business assets of at least AUD 2.25 million in the last 2 economic years.",
                  "Should be under the age of 55 years, unless the State or Territory that the applicant has been nominated by certifies that granting the visa will result in excellent economic benefit.",
                  "Must have an experience of at least 3 years in managing eligible investments or a qualifying business. The applicant is required to show exceptional business management skills.",
                ],
              },
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Subclass 188B Requirements",
            texts: [
              {
                type: "ul",
                items: [
                  "The applicants must have personal and business assets of at least AUD 2.25 million in the last 2 economic years.",
                  "Should be under the age of 55 years, unless the State or Territory that the applicant has been nominated by certifies that granting the visa will result in excellent economic benefit.",
                  "Must have an experience of at least 3 years in managing eligible investments or a qualifying business. The applicant is required to show exceptional business management skills.",
                  "Managed a business in which you hold a 10% business share",
                  "Managed eligible investments worth at least AUD 1.5 million",
                ],
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default BusinessVisaInvestment;
