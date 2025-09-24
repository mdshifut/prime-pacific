import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import React from "react";

import GeneralContent from "@/components/GeneralContent";

const SubclassOrphanVisa = () => {
  return (
    <>
      <Breadcrumb
        title={"Subclass 117 – Orphan Visa"}
        items={[
          { label: "Home", href: "/" },
          { label: "Other Visa's" },

          {
            label: "Subclass 117 – Orphan Visa",
            active: true,
          },
        ]}
      />
      <FeatureContent
        subTitle="Subclass 117"
        title="Orphan Relative Visa Australia"
        description={[
          "Australia allows their Australian citizen, Australian permanent residents or eligible New Zealand citizens to bring their orphan relatives to live and work in Australia permanently.",
        ]}
        img1="/orphan.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Subclass 117 Processing Time",
            texts: [
              "Processing Time for Orphan Visa – Subclass 117: No standard time available",
            ],
          },

          {
            title: "Eligibility For Orphan Visa Australia",
            texts: [
              {
                type: "ul",
                items: [
                  "Be under the age of 18",
                  "Have a relative settled in Australia who must be the Australian citizen, permanent resident of Australia or eligible New Zealand citizen",
                  "Be living outside Australia",
                ],
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default SubclassOrphanVisa;
