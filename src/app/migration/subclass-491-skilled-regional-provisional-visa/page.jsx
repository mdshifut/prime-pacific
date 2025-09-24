import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import React from "react";

import GeneralContent from "@/components/GeneralContent";

const SubclassSkilledRegionalVisa = () => {
  return (
    <>
      <Breadcrumb
        title={"Subclass 491 Skilled Regional (Provisional) Visa"}
        items={[
          { label: "Home", href: "/" },
          { label: "Migration" },
          {
            label: "Subclass 491 Skilled Regional (Provisional) Visa",
            active: true,
          },
        ]}
      />
      <FeatureContent
        subTitle="Subclass 491"
        title="Skilled Work Regional Visa"
        description={[
          "Subclass 491 – Skilled Work Regional Visa allows the skilled individuals to live & work in regional areas of Australia for 5 years & have a pathway to PR. The Australian government is especially emphasizing on its regional areas by creating more prospects related to work in these regional areas. This is expected to bring economic growth for regional Australia. In this very context, a new visa 491 is introduced.",
        ]}
        img1="/work-visa.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Skilled Regional Visa (Provisional) has 2 Applicants",
            texts: [
              "<strong>Skilled Work Regional Visa (Provisional) Subclass 491- Main Applicant</strong>",
              "This visa is allows the skilled individuals to live and work in regional areas of Australia for a span of 5 years. Australian government is emphasizing on the development of their regional areas by creating new work opportunities there and by inviting people from overseas to meet the void of skilled workers there.",
            ],
          },

          {
            title: "What can you do With This Visa?",
            texts: [
              {
                type: "ul",
                items: [
                  "Come and live in Australia for a span of 5 years",
                  "One can live, work and study in Australian regional area",
                  "The applicant can travel from Australia and to Australia whenever he/she wants.",
                ],
              },
            ],
          },
          {
            title: "Eligibility For Subclass 491",
            texts: [
              {
                type: "ul",
                items: [
                  "The applicant must be nominated by the state or is sponsored by a relative who is a permanent Australian resident living in regional Australia",
                  "Should belong to the profession listed in the relevant occupation list",
                  "The skill of the applicant must be assessed by the relevant skill assessing authorities",
                  "Must be 45 or less than 45 in age",
                  "The applicant must meet all the character and health requirements",
                  "Should get an invitation to apply",
                  "The applicant must score 65 points at minimum",
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
            title:
              "Subclass 491 Subsequent Entrant – Skilled Work Regional (Provisional) Visa",
            texts: [
              "This visa allows the member of the family unit of a person who holds work regional visa 491 to come and live in regional Australia until the visa that the main applicant holds ends.",
            ],
          },
          {
            title: "Eligibility",
            texts: [
              "Applicant must:",
              {
                type: "ul",
                items: [
                  "The applicant must be a member of the family unit of the main applicant holding skilled work regional visa subclass 491",
                  "Should meet all health and character requirements",
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
            title:
              "Duration of Skilled Work Regional (Provisional) Visa 491 – Subsequent Entrant",
            texts: [
              "The duration of this visa is until the visa of the main applicant ends.",
            ],
          },
          {
            title:
              "Cost of Skilled Work Regional (Provisional) Visa 491 –Subsequent Entrant",
            texts: ["The processing fee of this visa is AUD 4,045"],
          },
        ]}
      />
    </>
  );
};

export default SubclassSkilledRegionalVisa;
