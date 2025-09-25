import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import GeneralContent from "@/components/GeneralContent";
export const metadata = {
  title: "Work and Holiday Visa (Subclass 462) | Prime Pacific Consultancy",
  description:
    "Expert advice on the Work and Holiday Visa (Subclass 462) for Australia. Learn about eligibility, process, and short-term work and travel opportunities for young adults from Prime Pacific Consultancy.",
};

const WorkHolidayVisaAustraliaVisa = () => {
  return (
    <>
      <Breadcrumb
        title={"Work and Holiday Visa Australia – 462 Visa"}
        items={[
          { label: "Home", href: "/" },
          { label: "Other Visa's" },

          {
            label: "Work and Holiday Visa Australia – 462 Visa",
            active: true,
          },
        ]}
      />
      <FeatureContent
        subTitle="Subclass 462 "
        title="Work and Holiday Visa"
        description={[
          "The subclass 462 work and holiday visa is for young people (aged between 18 to 30 years), allows to short term work and holiday in Australia. Work and Holiday Visa is for young adults who’d like to travel for an extended period of time and to work in Australia to fund it.",
        ]}
        img1="/work.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Processing Time For 462 Visa",
            texts: [
              "The Department of Home Affairs processes all applications for Work and Holiday Visas. It generally takes:",
              {
                type: "ul",
                items: [
                  "9 Days to finalize 25% of applications.",
                  "26 Days to finalize 50% of applications.",
                  "3 Months to finalize 75% of applications.",
                  "4 Months to finalize 90% of applications.",
                ],
              },
            ],
          },

          {
            title: "Cost",
            texts: [
              "Work and Holiday Visa Australia costs around AUD 495. You might also be required to pay for police certificates, biometrics and health checks.",
            ],
          },
          {
            title: "Stay Period",
            texts: [
              "Work and Holiday Visa Australia – 462 Visa  is a short-term visa. You can live in Australia for more than a year with this visa. Within your stay period, you can depart and arrive back to Australia multiple times.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "First Work and Holiday Visa 462",
            texts: [""],
          },
          {
            title: "Eligibility",
            texts: [
              {
                type: "ul",
                items: [
                  "Have a passport from an authorized country.",
                  "Be 18 to 30 years of age.",
                  "Apply while you’re overseas.",
                  "Haven’t arrived in Australia on a Work and Holiday visa 462 or Working Holiday visa 417 before.",
                  "Meet the education criteria of the Department of Home Affairs.",
                  "Be able to speak at least functional English.",
                  "Support letter from your government.",
                  "Have financial resources to support yourself for your whole stay period in Australia.",
                  "Meet the health and character requirements.",
                  "Never have had a visa refusal before.",
                  "Not have debts to pay to the Australian Government.",
                  "Sign the Australian Values Statement.",
                ],
              },
            ],
          },

          {
            title: "Benefits",
            texts: [
              {
                type: "ul",
                items: [
                  "Do any kind of a temporary job to pay for your holiday.",
                  "Study in Australia for more than 4 months.",
                  "Travel across Australia as often as you like.",
                  "Participate in 3 months of specified subclass 462 work to be eligible for a second Work and Holiday Visa.",
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
            title: "Second Work and Subclass 462 Visa",
            texts: [""],
          },
          {
            title: "Benefits",
            texts: [
              {
                type: "ul",
                items: [
                  "Work in Australia for a short time to help you pay for your holidays.",
                  "Study for a period of four months.",
                  "ravel to/from Australia as many times as you wish.",
                  "Complete specified 462 work of 6 months to be eligible for a Third Work and Holiday visa.",
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
                  "Have recently arrived in Australia on a 462 visa.",
                  "Have a passport from an approved country.",
                  "Have done 3 months of specified subclass 462 work.",
                  "Not bring a dependent child with you.",
                  "Hold a substantive visa or your last substantive visa ended within the last 28 days if you’re in Australia.",
                ],
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default WorkHolidayVisaAustraliaVisa;
