import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import GeneralContent from "@/components/GeneralContent";

export const metadata = {
  title: "Dependent Child Visa (Subclass 445) | Prime Pacific Consultancy",
  description:
    "Expert advice on the Dependent Child Visa (Subclass 445) for Australia. Learn about eligibility, process, and temporary residency support for dependent children from Prime Pacific Consultancy.",
};

const SubclassDependentChildVisa = () => {
  return (
    <>
      <Breadcrumb
        title={"Subclass 445 – Dependent Child Visa"}
        items={[
          { label: "Home", href: "/" },
          { label: "Other Visa's" },

          {
            label: "Subclass 445 – Dependent Child Visa",
            active: true,
          },
        ]}
      />
      <FeatureContent
        subTitle="Subclass 445"
        title="Dependent Child Visa"
        description={[
          "Is your parent moved to Australia? With Subclass 445, Australian Immigration allows the dependent child to move to Australia temporarily where they can live with their parents.",
        ]}
        img1="/dependent.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Subclass 445 Processing Time",
            texts: [
              "Processing Time for Dependent Child Visa – Subclass 445: 9 – 13 Months",
            ],
          },

          {
            title: "Eligibility",
            texts: [
              {
                type: "ul",
                items: [
                  "Be the dependent child of a visa-holding parent",
                  "Be sponsored by the sponsor or nominator of visa-holding parent",
                  "Under 18 years of age or between 18-25 years and financially dependent on the parent for the studies",
                ],
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default SubclassDependentChildVisa;
