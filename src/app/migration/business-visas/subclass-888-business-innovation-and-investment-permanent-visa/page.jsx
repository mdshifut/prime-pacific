import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import React from "react";

import GeneralContent from "@/components/GeneralContent";

const Subclass888BusinessVisaInvestment = () => {
  return (
    <>
      <Breadcrumb
        title={
          "Subclass 888 – Business Innovation and Investment (Permanent) Visa"
        }
        items={[
          { label: "Home", href: "/" },
          { label: "Migration" },
          { label: "Business Visas", href: "/migration/business-visas" },
          {
            label:
              "Subclass 888 – Business Innovation and Investment (Permanent) Visa",
            active: true,
          },
        ]}
      />
      <FeatureContent
        subTitle="Subclass 888"
        title="Business Innovation Stream"
        description={[
          "Subclass 888 is a permanent visa that allows Business Innovation and Investment (Provisional) visa holders to live in Australia permanently to carry out their business activities.",
        ]}
        img1="/inovation-permanent.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Subclass 888 Processing Time",
            texts: [
              "Processing Time for Business Innovation Stream – Subclass 888: 10 – 12 Months",
            ],
          },

          {
            title: "Eligibility For 888 Visa",
            texts: [
              {
                type: "ul",
                items: [
                  "Own or manage a business at least for 2 recent years",
                  "Meet the assets, employment and residence requirement",
                  "Hold Business Innovation and Investment (Provisional) visa in the Business Innovation stream or subclass 444, or subclass 457 (in certain conditions)",
                  "Have current nomination from the state or territory government",
                  "Have functional English",
                  "Meet health and character requirement",
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
            title: "Subclass 888 – Investor Stream",
            texts: [
              "<strong>Processing Time</strong>",
              "Processing Time for Investor Stream – Subclass 888: No standard time available",
              "<strong>Eligibility</strong>",
              {
                type: "ul",
                items: [
                  "Have maintained the investment of AUD 1.5 million for at least 4 years in Australian state or territory",
                  "Hold Business Innovation and Investment (Provisional) visa in the Investor stream",
                  "Meet the assets, employment and residence requirement",
                  "Hold Business Innovation and Investment (Provisional) visa in the Business Innovation stream or subclass 444, or subclass 457 (in certain conditions)",
                  "Have current nomination from the state or territory government",
                  "Have functional English",
                  "Meet health and character requirement",
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
            title: "Subclass 888 – Significant Investor Stream",
            texts: [
              "<strong>Processing Time</strong>",
              "Processing Time for Significant Investor Stream – Subclass 888: No standard time available",
              "<strong>Eligibility</strong>",
              {
                type: "ul",
                items: [
                  "Have maintained the complying investment of AUD 5 million for 4 years in Australian state or territory",
                  "Hold Business Innovation and Investment (Provisional) visa in the Significant Investor stream",
                  "Meet the business, investment and residence requirement",
                  "Have current nomination from the state or territory government",
                  "Have functional English",
                  "Meet health and character requirement",
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
            title: "Subclass 888 – Premium Investor Stream",
            texts: [
              "<strong>Processing Time</strong>",
              "Processing Time for Premium Investor Stream – Subclass 888: No standard time available",
              "<strong>Eligibility</strong>",
              {
                type: "ul",
                items: [
                  "Receive an invitation by the Austrade to invest in Australia",
                  "Make an investment of at least AUD 15 million that comply with all the requirements",
                  "Have net assets of at least AUD 15 million",
                  "Have functional English",
                  "Meet health and character requirement",
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
            title: "Subclass 888 – Entrepreneur Stream",
            texts: [
              "<strong>Processing Time</strong>",
              "Processing Time for Entrepreneur Stream – Subclass 888: No standard time available",
              "<strong>Eligibility</strong>",
              {
                type: "ul",
                items: [
                  "Have maintained the complying investment of AUD 15 million for the duration of holding the provisional visa",
                  "Held the Business Innovation and Investment (Provisional) visa in the Premium Investor stream for 12 months",
                  "Have current nomination from Austrade",
                  "Have functional English",
                  "Meet health and character requirement",
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
            title: "Subclass 888 – Entrepreneur Stream",
            texts: [
              "<strong>Processing Time</strong>",
              "Processing Time for Entrepreneur Stream – Subclass 888: No standard time available",
              "<strong>Eligibility</strong>",
              {
                type: "ul",
                items: [
                  "Held the Business Innovation and Investment (Provisional) visa in the Entrepreneur stream for 4 years",
                  "Have a successful record of maintaining entrepreneurial activities",
                  "Have current nomination from the state or territory government",
                  "Have functional English",
                  "Meet health and character requirement",
                ],
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default Subclass888BusinessVisaInvestment;
