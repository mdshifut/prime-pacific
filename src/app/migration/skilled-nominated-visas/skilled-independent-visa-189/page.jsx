import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import GeneralContent from "@/components/GeneralContent";
export const metadata = {
  title: "Skilled Independent Visa 189 | Prime Pacific Consultancy",
  description:
    "Information and expert guidance for the Skilled Independent Visa (Subclass 189) in Australia.",
};

const SkilledIndependentVisaSC189 = () => {
  return (
    <>
      <Breadcrumb
        title={"Skilled Independent Visa SC 189"}
        items={[
          { label: "Home", href: "/" },
          { label: "Migration" },
          {
            label: "Skilled Nominated Visas",
            href: "/migration/skilled-nominated-visas",
          },
          { label: "Skilled Independent Visa SC 189", active: true },
        ]}
      />
      <FeatureContent
        subTitle="Get Your visa"
        title="Live Your Dream Life With Skilled Independent Visa"
        description={[
          "Australia is a country of immense possibilities which holds plenty of promise. Supported by a strong economy coupled with skilled professionals it’s a remunerative place for immigrants. If you are an expert professional this is your quickest route to permanent residency. We facilitate ease of skilled independent visa 189",
        ]}
        img1="/dream.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Australia- <strong>The Land of Success</strong>?",
            texts: [
              "Australia is still one of the most popular countries for skilled migrants. Its economy, infrastructure, and amiable environment make it a perfect destination to work, settle, and thrive.",
              {
                type: "ul",
                items: [
                  "<strong>Good Job Market</strong> – Australia actively recruits skilled professionals to address key job gaps. ",
                  "<strong>World-Class Lifestyle</strong> – Enjoy a secure, contemporary, and multicultural society with great public services. ",
                  "<strong>Top Salaries & Perks </strong> – Competitive salary, healthcare, and social security for skilled migrants. ",
                  "<strong>Permanent Residence & Citizenship</strong>– The 189 Visa provides you with full residence and work rights, resulting in citizenship. ",
                ],
              },
              "Our expert 189 visa consultant offer best visa services make your 189 skilled migration more smoother. We facilitate skilled professionals in obtaining their Australian dream through hassle-free visa application and professional assistance. ",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "What is the <strong>189 Visa?</strong>",
            texts: [
              "<strong>189 Visa – Skilled Independent Visa</strong>",
              "The 189 Visa is a point-tested permanent residence visa that allows skilled professionals to reside and work anywhere in Australia.",
              "It is not subject to employer sponsorship or state nomination, providing you with complete autonomy to establish your career. ",
              "<strong>Skilled Migration (189 Visa) Requirements:</strong>",
              "In order to be eligible for the 189 Visa, you need to fit these primary eligibility requirements: ",
              {
                type: "ul",
                items: [
                  "Have a profession included on Australia’s Skilled Occupation List (SOL).",
                  "Submit an Expression of Interest and you must be invited to apply for the visa.",
                  "Apply within 60 days of receiving the invitation.",
                  "Experience in a relevant skilled occupation listed on Australia’s Skilled 189 Occupations List",
                  "Skills Assessment for the occupation from a recognized body",
                  "The applicant must receive positive skills assessment from the relevant Skilled Occupations List.",
                  "A minimum score of 65 points in the Australian immigration points test.",
                  "Aged above 18 years and below 45 years when the invitation is issued.",
                  "Meet the requirements for Skilled Migration",
                  "Comply with English language proficiency standards (IELTS, PTE, or TOEFL).",
                  "Pass medical and character tests to qualify.",
                ],
              },
              "189 visa consultant from our team will assess your profile, calculate your points, and guide you through each requirement to maximize your success rate.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title:
              "189 Visa Application Process – How We <strong>Help You Get Approved</strong>",
            texts: [
              {
                type: "ul",
                items: [
                  "Applying for a 189 skilled independent visa requires precision and strict compliance with immigration laws.  ",
                  "Slight mistake, can lead to delays or rejection. That’s where we help  ",
                ],
              },
            ],
          },
          {
            title: "Services",
            texts: [
              {
                type: "ul",
                items: [
                  "We evaluate your qualifications and occupation eligibility.",
                  "Our 189 visa consultant assist you in obtaining a positive skills assessment. ",
                  "We assist in preparing and lodging your EOI. ",
                  "In case of selection, we assist you with preparing all the documents.",
                  "We provide error-free documentation for highest chances of approval.",
                  "Most skilled visas require a field expert’s testing.   The qualifications and experience are Australian-standard.   Find out which organisation evaluates your job.",
                  "We assist in fulfilling health and character requirements.",
                  "We assist with post-visa services such as job seeking and relocation.  ",
                ],
              },

              "With our complete end-to-end visa services, your 189 visa application process is made easy and prompt.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Why Choose Us <strong>For 189 Visa</strong>?",
            texts: [
              "Applying for a Skilled Independent Visa (Subclass 189) is often difficult. We make it easy, minimize stress, and increase your success rate. With our skilful expertise in helping applicants migrate to Australia, Prime Pacific Consultancy can assist you with hassle-free Skilled Visa migrations. While skilled migration is a complex procedure, we can ensure an effortless and structured visa application process to help you reach your goal faster.",
            ],
          },
          {
            title:
              "Contact Us For Your <strong>Skilled Independent Visa</strong>",
            texts: [
              "<strong>Proven Migration Specialists</strong> – Our 189 visa consultant are certified migration specialists with many years of experience. ",
              "<strong>High Success Rate</strong> – Thousands of professionals have been helped by us to migrate to Australia. ",
              "<strong>Personalized Consultation</strong> – Each case is unique. We prepare tailored migration strategies for you. ",
              "<strong>Fast-Track Processing</strong> – Say goodbye to delays with our efficient visa application services. ",
              "<strong>End-to-End Support</strong> – From checking your eligibility to post-visa support, we’re with you every step of the way. . ",
              "<strong>Affordable Fees & Transparent Service</strong> – No surprise costs. Enjoy quality migration services at a great price. ",
              "Don’t let visa complexities slow down your dreams. We are here to simplify your 189 visa application process and make it stress-free.  Contact us for your skilled independent visa 189.",
            ],
          },
        ]}
      />
    </>
  );
};

export default SkilledIndependentVisaSC189;
