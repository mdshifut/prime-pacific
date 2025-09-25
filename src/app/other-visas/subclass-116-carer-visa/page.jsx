import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import GeneralContent from "@/components/GeneralContent";

export const metadata = {
  title: "Carer Visa (Subclass 116) | Prime Pacific Consultancy",
  description:
    "Expert guidance on the Carer Visa (Subclass 116) for Australia. Learn about eligibility, process, and benefits for caring for relatives with medical conditions. Permanent residency support from Prime Pacific Consultancy.",
};

const SubclassCarerVisa = () => {
  return (
    <>
      <Breadcrumb
        title={"Subclass 116 – Carer Visa"}
        items={[
          { label: "Home", href: "/" },
          { label: "Other Visa's" },

          {
            label: "Subclass 116 – Carer Visa",
            active: true,
          },
        ]}
      />
      <FeatureContent
        subTitle="Subclass 116"
        title="Carer Visa in Australia "
        description={[
          "Carer Visa in Australia (Subclass 116 & 836) is given to care for people or relatives in Australia with a long medical conditions. It is permanent visa. This visa allows people to come to Australia or stay longer in Australia.",
        ]}
        img1="/carer.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Carer Visa 116 Processing Time",
            texts: [
              "Carer Visa 116 Processing Time – Subclass 116: No standard time available",
            ],
          },

          {
            title: "Eligibility for <strong>Carer Visa Australia</strong>",
            texts: [
              {
                type: "ul",
                items: [
                  "You must be residing outside Australia to apply for subclass 116.",
                  "our relative or partner must sponsor you for the first two years in Australia.",
                  "If your relative, or a member of their family who lives with them, has no reasonable access to care in Australia, you must provide them medical care.",
                  "It is necessary to meet all health and character requirements.",
                  "You must have paid back all your debts to the Australian Government if there’re any.",
                ],
              },
            ],
          },

          {
            title: "Eligibility for<strong> Carer Visa 836</strong>",
            texts: [
              {
                type: "ul",
                items: [
                  "Be present in Australia while lodging your visa application and when the Department of Home Affairs grants you the visa.",
                  "Provide care to a relative or a member of their family who cannot access care in Australia.",
                  "Be sponsored by a close relative, spouse, or de facto partner for your first 2 years in Australia.",
                  "Hold any substantive visa except a Transit visa (subclass 771).",
                  "Meet health and character requirements.",
                  "Have paid back all debts to the Australian Government.",
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
            title: "Requirements for Relatives",
            texts: [
              {
                type: "ul",
                items: [
                  "You must be residing in Australia as a permanent resident, an Australian citizen or an eligible citizen of New Zealand.",
                  "Visa applicants must either be their spouse, child, brother, sister, parent, grandparent, granddaughter, aunt, uncle, niece or nephew.",
                ],
              },
            ],
          },
          {
            title: "Cost",
            texts: [
              "Carer Visa Australia costs around AUD 3,890. However, you’re required to pay for health checks, biometrics and police certificates separately.",
            ],
          },
          {
            title: "Stay Period",
            texts: [
              "Visa 116 is a permanent visa. It allows people to stay in Australia permanently.",
            ],
          },
          {
            title: "Benefits",
            texts: [
              {
                type: "ul",
                items: [
                  "Live in Australia permanently.",
                  "Enroll in a study course.",
                  "Work in the Australian firms.",
                  "Sponsor your relatives to visit Australia.",
                  "Travel from and to Australia as many times as they want for 5 years.",
                  "Apply for citizenship in Australia if eligible.",
                  "Enroll in Medicare for public healthcare and medical services in Australia.",
                ],
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default SubclassCarerVisa;
