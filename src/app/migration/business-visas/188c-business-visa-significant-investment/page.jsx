import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import GeneralContent from "@/components/GeneralContent";

export const metadata = {
  title:
    "188C Business Visa Significant Investment | Prime Pacific Consultancy",
  description:
    "Information and expert guidance for the 188C Significant Investor Stream (Business Innovation and Investment) visa in Australia.",
};

const BusinessVisas = () => {
  return (
    <>
      <Breadcrumb
        title={"188C Business Visa (Significant Investment)"}
        items={[
          { label: "Home", href: "/" },
          { label: "Migration" },
          { label: "Business Visas", href: "/migration/business-visas" },
          {
            label: "188C Business Visa (Significant Investment)",
            active: true,
          },
        ]}
      />
      <FeatureContent
        subTitle="188C Visa"
        title="Significant Investment"
        description={[
          "The 188C Visa is for people that would like to make an investment of AUD 5 million in Australia. It is applicable only for applicants that have been nominated by an Australian State or Territory. This 4 year temporary visa requires the applicant to submit an Expression of Interest or EOI through SkillSelect.",
        ]}
        img1="/investment.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Subclass 188C Application- Requites",
            texts: [
              {
                type: "ul",
                items: [
                  "The applicant for this visa must be nominated by an Australian State or Territory.",
                  "Submit an Expression of Interest through SkillSelect.",
                  "In order to apply, the applicant can be in Australia or even overseas. If the applicant in Australia, it is essential to hold a Substantive Visa or a Bridging A, B or C Visa.",
                  "The applicant is required to make an investment of AUD 5 million in a complying investment Australia.",
                  "A minimum of $500,000 in Venture Capital and Growth Private Equity funds that are invested in start-ups and small private companies.",
                  "Should hold at least $1.5 million in approved managed funds that are invested in emerging companies that are listed on the Australian Stock Exchange",
                  "The applicant must have a balancing investment of up to $3 million in managed funds.",
                ],
              },
            ],
          },

          {
            title: "188C Visa Benefits",
            texts: [
              {
                type: "ul",
                items: [
                  "No upper age limit",
                  "No requirement of the English Language",
                  "No score or Points Test required",
                  "If the applicant meets the extension requirement, the visa provides an extension at least 2 times for a period of 2 years each.",
                  "It has a lower residence requirement of 40 days per year for the applicant and 180 days for their spouse to apply for the 888 Permanent Visa.",
                ],
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default BusinessVisas;
