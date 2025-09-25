export const metadata = {
  title: "Subclass 101 Child Visa Australia | Prime Consultancy Consultancy",
  description:
    "Expert guidance for Subclass 101 Child Visa Australia application.",
};
import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import React from "react";

import GeneralContent from "@/components/GeneralContent";

const PartnerVisaAustralia = () => {
  return (
    <>
      <Breadcrumb
        title={"Subclass 101- Child Visa Australia"}
        items={[
          { label: "Home", href: "/" },
          { label: "Migration" },
          { label: "Family Visas", href: "/migration/family-visas" },
          { label: "Subclass 101 - Child Visa Australia", active: true },
        ]}
      />
      <FeatureContent
        subTitle="Subclass 101- Child Visa Australia"
        title="Expert Guidance for a Hassle-Free Application"
        description={[
          "A Subclass 101 Visa (Child Visa Australia) allows children outside Australia to live with their parents in Australia. It’s a permanent visa. You can live in Australia as a permanent resident with your parents.",
        ]}
        img1="/child-visa.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Child Visa – Subclass 101",
            texts: [
              "<strong>Processing Time</strong>",
              {
                type: "ul",
                items: [
                  "75% of applications take 15 months to be processed.",
                  "90% of applications take 24 months to be finalized.",
                ],
              },
              "However, the application might take longer to be processed if it doesn’t fulfill the requirements. Your application must have the complete documents. As the Department of Home Affairs (DOHA) refuses the visa applications with insufficient documentation.",
            ],
          },

          {
            title: "Eligibility",
            texts: [
              {
                type: "ul",
                items: [
                  "The applicants must be a dependent child of a parent who’s an Australian permanent resident, Australian citizen, or eligible New Zealand citizen.",
                  "Your relationship status must be single.",
                  "You must be a dependent child of your Australian parents.",
                  "You must be living outside Australia while you apply for subclass 101",
                  "An age limit of 18 years old is required.",
                  "You must be a full-time student between 18 to 25 years of age.",
                  "You should be financially dependent on your parents living in Australia.",
                  "You must meet the health and character requirements set by the Department of Home Affairs (DOHA).",
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
            title: "Cost",

            texts: [
              "Child Visa Subclass 101 costs around AUD 2,710. Though, there’ll be separate charges for each of the child’s dependent children who’s applying for subclass 101. Other costs may also be involved for health checks, biometrics and police certificates.",
            ],
          },
          {
            title: "Visa Australia Stay Period",
            texts: [
              "Child Visa Australia is a permanent visa. It allows applicants to live permanently in Australia.",
            ],
          },
          {
            title: "Inclusion of Your Family",
            texts: [
              "Child Visa Australia is a permanent visa. It allows applicants to live permanently in Australia.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Subclass 101 Visa Benefits",
            texts: [
              {
                type: "ul",
                items: [
                  "Stay in Australia indefinitely",
                  "Enroll in any course study",
                  "Work in Australia",
                  "Travel to and from Australia for 5 years from the date the Child Visa is granted.",
                  "Become a member of Medicare, Australia’s health care and insurance scheme",
                ],
              },
            ],
          },
          {
            title: "Inclusion of Your Family",
            texts: [
              {
                type: "ul",
                items: [
                  "You must be above 18 years of age.",
                  "You need to be a permanent resident of Australia, a citizen of Australia or a citizen of New Zealand.",
                  "If your child lives in Australia, you must pay for the cost of that child to the Australian Government.",
                  "Assist the child to be settled in Australia.",
                  "Assist the child in attending any required English language classes.",
                  "Assure the child has adequate accommodation and financial support for their first two years in Australia.scheme",
                ],
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default PartnerVisaAustralia;
