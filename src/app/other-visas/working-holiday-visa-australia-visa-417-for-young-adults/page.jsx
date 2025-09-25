import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import GeneralContent from "@/components/GeneralContent";

export const metadata = {
  title: "Working Holiday Visa (Subclass 417) | Prime Pacific Consultancy",
  description:
    "Expert advice on the Working Holiday Visa (Subclass 417) for Australia. Learn about eligibility, process, and work/travel opportunities for young adults from Prime Pacific Consultancy.",
};

const WorkingHolidayVisaAustralia = () => {
  return (
    <>
      <Breadcrumb
        title={"Working Holiday Visa Australia – Visa 417 for young adults"}
        items={[
          { label: "Home", href: "/" },
          { label: "Other Visa's" },

          {
            label: "Working Holiday Visa Australia – Visa 417 for young adults",
            active: true,
          },
        ]}
      />
      <FeatureContent
        subTitle="Get your"
        title="Working Holiday Visa Australia"
        description={[
          "Apply for working holiday visa in Australia with Prime Pacific Consultancy. We provide genuine guidance and support for Australia working visa. A Working Holiday Visa 417 is for young adults who want to extend their holiday and work in Australia to pay for it.",
        ]}
        img1="/holiday-work.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Processing Time For Australia Working Visa",
            texts: [
              "The Department of Home Affairs processes all applications for Work and Holiday Visas. It generally takes:",
              {
                type: "ul",
                items: [
                  "Less than 1 day to process 25% of applications",
                  "Less than 1 day to process 50% of applications in",
                  "17 days to process 75% of applications",
                  "4 Months to process 90% of applications",
                ],
              },
            ],
          },

          {
            title: "Eligibility",
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
            title: "Stay Period For Working Holiday Visa Australia",
            texts: [
              "You can live in Australia for 12 months with a Working Holiday Visa Australia.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "First Working Holiday Visa Australia –Subclass 417",
            texts: [""],
          },
          {
            title: "Processing Time",
            texts: [
              "Processing Time for Significant Investor Stream – Subclass 188: No standard time available",
            ],
          },
          {
            title: "Eligibility",
            texts: [
              {
                type: "ul",
                items: [
                  "Be a passport holder from an eligible state or country",
                  "Be between 18 & 30 years old or 35 years old in some countries",
                  "Apply online from overseas",
                  "Not have a dependent child with you",
                  "Not have recently arrived in Australia on a Visa 462 or 417 visa.",
                  "Be financially capable of supporting yourself during your entire stay in Australia",
                  "Satisfy all requirements for health and character",
                  "Be sure to pay off your debts to the Australian government",
                  "Not have a canceled visa or had a recent visa application denied",
                  "Sign the Australian Values statement",
                ],
              },
            ],
          },

          {
            title: "Benefits of Australia Working Visa",
            texts: [
              {
                type: "ul",
                items: [
                  "Pay for your vacation by doing a temporary job in Australia",
                  "Study in Australia for a period of at least four months",
                  "Travel across Australia multiple times",
                  "Complete a specified work of 3 months to apply for a Second Working Holiday Visa",
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
            title: "Second Working Holiday Visa Australia – Subclass 417",
            texts: [""],
          },
          {
            title: "Benefits",
            texts: [
              {
                type: "ul",
                items: [
                  "Enroll in a course of study with a duration of at least 4 months.",
                  "Fly to and from Australia as often as you want",
                  "Complete 6 months of specified work to apply for a third Working Holiday visa",
                  "Do a temporary job in Australia to help fund your holiday",
                ],
              },
            ],
          },

          {
            title: "Eligibility",
            texts: [
              {
                type: "ul",
                items: [
                  "Have recently arrived in Australia on a 417 visa",
                  "Hold a substantive visa or your last substantive visa must have expired within the past 28 days if you’re in Australia",
                  "Be between 18-30 years of age. The age requirement can be 35 years in a few countries.",
                  "Have done 3 months of specified subclass 417 work",
                  "Not be accompanied by a dependent child",
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
            title: "Third Working Holiday Visa Australia – Subclass 417",
            texts: [""],
          },
          {
            title: "Benefits",
            texts: [
              {
                type: "ul",
                items: [
                  "Do a temporary job to pay for your holiday in Australia",
                  "Travel multiple times from and to Australia",
                  "Study for up to four months",
                ],
              },
            ],
          },

          {
            title: "Eligibility",
            texts: [
              {
                type: "ul",
                items: [
                  "Have recently held 2 subclasses 417 visas in Australia.",
                  "Have a substantive visa or your previous substantive visa must have ended within the last 28 days if you’re in Australia.",
                  "Be a passport holder from an eligible state/country.",
                  "Have finished specified subclass 417 work for 6 months.",
                ],
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default WorkingHolidayVisaAustralia;
