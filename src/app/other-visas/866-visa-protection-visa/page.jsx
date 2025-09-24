import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import React from "react";

import GeneralContent from "@/components/GeneralContent";

const ProtectionVisa = () => {
  return (
    <>
      <Breadcrumb
        title={"866 Visa – Protection Visa"}
        items={[
          { label: "Home", href: "/" },
          { label: "Other Visa's" },

          {
            label: "866 Visa – Protection Visa",
            active: true,
          },
        ]}
      />
      <FeatureContent
        subTitle="866 Visa"
        title="Protection Visa"
        description={[
          "866 Protection Visa Australia is designed for people who entered Australia on a valid visa and seeking asylum. It’s a permanent visa. You must fulfill Australia’s protection obligations and meet requirements in order to obtain Protection Visa 866.",
          "This 866 visa permits people who are in Australia and want to apply for protection to stay in Australia permanently. Only if the applicant arrived in Australia legally, engage Australia’s protection obligations and fulfil all other visa requirements.",
        ]}
        img1="/family-protection.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Processing Time For 866 Visa",
            texts: [
              "The processing time for Visa 866 varies. It depends on the application that whether they include the required documentation. The Department of Home Affairs processes the visa applications quickly if they’re submitted accurately. Therefore, you must fulfill the application requirements to get your Protection Visa 866 as soon as possible.",
            ],
          },

          {
            title: "Eligibility",
            texts: [
              {
                type: "ul",
                items: [
                  "You must have been in Australia on a valid visa.",
                  "You’re required to provide evidence of your nationality, identity or citizenship with your visa application.",
                  "You must engage with Australia’s protection obligations",
                  "Provide your biometrics.",
                  "You must meet the health and character requirements.",
                  "You must be residing in Australia while applying for this visa.",
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
            title: "Stay Period For Visa 866",
            texts: [
              "866 Visa is a permanent visa. You become a permanent resident of Australia from the date the Department of Home Affairs grants you the Visa 866.",
            ],
          },
          {
            title: "Benefits of Protection Visa 866",
            texts: [
              {
                type: "ul",
                items: [
                  "Live and work in Australia permanently",
                  "Enroll in a course study",
                  "You can travel to and from Australia for 5 years.",
                  "Have access to Medicare and Centrelink to get public services by the Australian Government",
                  "Sponsor your family members to apply for the Australian PR through the offshore Humanitarian program",
                  "Attend English language classes for free if you’re eligible",
                  "If you’re eligible, you can apply for Australian citizenship.",
                ],
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default ProtectionVisa;
