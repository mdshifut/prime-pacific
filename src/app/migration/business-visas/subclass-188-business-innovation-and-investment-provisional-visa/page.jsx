import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";

export const metadata = {
  title:
    "Subclass 188 Business Innovation and Investment Visa | Prime Pacific Consultancy",
  description:
    "Information and expert guidance for the Subclass 188 Business Innovation and Investment (Provisional) visa in Australia.",
};

import GeneralContent from "@/components/GeneralContent";

const Subclass188BusinessVisaInvestment = () => {
  return (
    <>
      <Breadcrumb
        title={
          "Subclass 188 – Business Innovation and Investment (Provisional) Visa"
        }
        items={[
          { label: "Home", href: "/" },
          { label: "Migration" },
          { label: "Business Visas", href: "/migration/business-visas" },
          {
            label:
              "Subclass 188 – Business Innovation and Investment (Provisional) Visa",
            active: true,
          },
        ]}
      />
      <FeatureContent
        subTitle="Subclass 188"
        title="Business Innovation Stream"
        description={[
          "Subclass 188 visa allows overseas people with the potential to establish a new business or operate an existing business to live temporarily in Australia. Therefore, this visa holder can stay in Australia temporarily. But they have a pathway to permanent residency through Business Innovation and Investment (Permanent) visa – subclass 188.",
        ]}
        img1="/inovation.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Subclass 188 Visa Processing Time",
            texts: ["Subclass 188 Visa Processing Time"],
          },

          {
            title: "188 visa Eligibility",
            texts: [
              {
                type: "ul",
                items: [
                  "Score at least 65 points on the point table",
                  "Have a successful business career",
                  "Own personal and business assets of at least AUD 800,000",
                  "Be an owner of a successful business for at least 2 fiscal years that had a turnover of at least AUD 500,000 in each of two years",
                  "Have an annual turnover of at least AUD 3.0 million",
                  "Be nominated by state or territory government",
                  "Under the age of 55 or above 55 if authorized by the state or territory government",
                  "Have functional English",
                  "Meet health and character requirement",
                ],
              },
            ],
          },
          {
            title: "Process Visa Subclass 188",
            texts: [
              {
                type: "ul",
                items: [
                  "Calculate the points of interest on the points table",
                  "Submit an Expression of Interest (EOI) in SkillSelect online immigration system that will estimate the point score of each applicant",
                  "Get a nomination by the state or territory government. Only if the applicant secured enough high points to get the nomination and can fulfill the skill requirement",
                  "Receive the invitation by the Department of Home Affairs to apply for the visa",
                  "Apply for the visa",
                  "Submit the required documents",
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
            title: "Subclass 188 – Significant Investor Stream",
            texts: [
              "<strong>Processing Time</strong>",
              "Processing Time for Significant Investor Stream – Subclass 188: No standard time available",
              "<strong>Eligibility</strong>",
              {
                type: "ul",
                items: [
                  "Have genuine intention to live in the nominated state or territory",
                  "Make an investment of at least AUD 5 million",
                  "Be nominated by the state or territory government",
                  "Have functional English",
                  "Meet health and character requirement",
                ],
              },
              "<strong>Eligibility</strong>",
              {
                type: "ul",
                items: [
                  "Submit an Expression of Interest (EOI) that includes skills, qualifications and investment experience in SkillSelect online immigration system that will estimate the point score of each applicant",
                  "Get a nomination by the state or territory government agency. Only if the applicant secured enough high points to be nominated and can fulfill the skill requirement.",
                  "Receive the invitation by the Department of Home Affairs to apply for the visa",
                  "Apply for the visa",
                  "Submit the required documents",
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
            title: "Subclass 188 – Business Innovation Extension Stream",
            texts: [
              "<strong>Processing Time</strong>",
              "Processing Time for Business Innovation Extension Stream – Subclass 188: No standard time available",
              "<strong>Eligibility</strong>",
              {
                type: "ul",
                items: [
                  "Must indicate a need for staying in Australia to manage the business",
                  "Have fulfilled the commitment of being directly involved in the business",
                  "Be nominated by the state or territory government",
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
            title: "Subclass 188 – Premium Investor Stream",
            texts: [
              "<strong>Processing Time</strong>",
              "Processing Time for Premium Investor Stream – Subclass 188: No standard time available",
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
            title: "Subclass 188 – Entrepreneur Stream",
            texts: [
              "<strong>Processing Time</strong>",
              "Processing Time for Entrepreneur Stream – Subclass 188: No standard time available",
              "<strong>Eligibility</strong>",
              {
                type: "ul",
                items: [
                  "Have received the funding of at least AUD 200,000 from one of the authorized entities",
                  "Be nominated by the state or territory government",
                  "Have a genuine intention of continuing the entrepreneurial activity",
                  "Under the age of 55 or above 55 if authorized by the state or territory government",
                  "Have competent English",
                  "Meet health and character requirement",
                ],
              },
              "<strong>Process</strong>",
              {
                type: "ul",
                items: [
                  "Submit an Expression of Interest (EOI) that includes skills, qualifications and investment experience in SkillSelect online immigration system that will estimate the point score of each applicant",
                  "Get a nomination by the state or territory government agency. Only if the applicant secured enough high points to be nominated and can fulfill the skill requirement.",
                  "Receive the invitation by the Department of Home Affairs to apply for the visa",
                  "Apply for the visa",
                  "Submit the required documents",
                ],
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default Subclass188BusinessVisaInvestment;
