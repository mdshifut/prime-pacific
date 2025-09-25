import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import GeneralContent from "@/components/GeneralContent";

export const metadata = {
  title: "Family Visas | Prime Consultancy Consultancy",
  description:
    "Comprehensive support for family visas and reunification in Australia.",
};

const FamilyVisas = () => {
  return (
    <>
      <Breadcrumb
        title={"Family Visas"}
        items={[
          { label: "Home", href: "/" },
          { label: "Migration" },
          { label: "Family Visas", active: true },
        ]}
      />
      <FeatureContent
        subTitle="Get Your"
        title="Family Visa Australia"
        description={[
          "At Prime Pacific Consultancy, we understand the importance of family reunification for our clients. We provide a range of Family Visa, Family Visitor Visa, Parent Visa services designed to help you bring your loved ones to Australia or ensure they can stay with you. Our commitment is to simplify the process and provide you with accurate guidance every step of the way. Apply for family visa Australia with Prime Pacific Consultancy. ",
        ]}
        img1="/family-outdoor.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Pre-Requites",
            texts: [
              "Partner Visa Subclass 820 (On-Shore): This visa allows the partner or spouse of an Australian citizen, permanent resident or eligible New Zealand citizen to live in Australia. It provides a temporary residence, enabling you to be with your loved one while the permanent Partner Visa is processed.",
              "Partner Visa Subclass 801 (On-Shore): This visa is the next step after Partner Visa Subclass 820. It grants permanent residence in Australia to the partner or spouse of an eligible Australian resident.",
              "Partner Visa Subclass 309 (Off-Shore): This visa is for partners or spouses of Australian citizens, permanent residents, or eligible New Zealand citizens who are living outside Australia. It allows you to enter and live in Australia while the permanent Partner Visa is processed.",
              "Partner Visa Subclass 100 (Off-Shore): This is the permanent counterpart to Partner Visa Subclass 309. Once granted, it allows you to live in Australia with your partner or spouse indefinitely.",
              "Contributory Parent Visa Subclass 143: This visa allows parents of Australian citizens, permanent residents, or eligible New Zealand citizens to live in Australia. It is a pathway to permanent residency and may have a shorter processing time than other parent visas.",
              {
                type: "ul",
                items: [
                  "Priority regional visa applications are handled faster.",
                  "Do regional work to boost your visa application.",
                  "Regional visas can lead to permanent residency after a few years.",
                  "Australia offers a city or area for you.   We’ll walk through Australian skilled worker visa application.",
                ],
              },
              "<strong>Apply For Family Visa Australia</strong>",
              "Our approach is rooted in providing reliable, straightforward guidance and assistance in navigating the Australian visa system. We prioritise your family’s unity and make the process as hassle-free as possible. Let us help you bring your loved ones closer or keep them with you in Australia. Get in touch with us right away for expert help with family visas and a helpful service that fits your needs.",
              "Prime Pacific Consultancy, a trusted Australia visa consultants, excels in providing comprehensive family visa services. Our expertise is particularly renowned, and we stand out as the best migration agent Sydney has to offer. We specialize in a range of visa services aimed at facilitating family reunification in Australia, including partner and contributory parent visas. Our approach is straightforward, ensuring clients receive accurate guidance throughout the visa application process. Prime Pacific Consultancy prioritizes your family’s unity, aiming to simplify and demystify the process of bringing your loved ones to Australia.",
            ],
          },

          {
            title: "Benefits of 190 Subclass Visa",
            texts: [
              {
                type: "ul",
                items: [
                  "You will be allowed to stay in Australia permanently. ",
                  "You can work and study in your sponsored state. ",
                  "Eligible family members can be included in your 190 visa application. ",
                  "The opportunity to apply for Australian citizenship once eligible.",
                  "Become a permanent resident and are eligible for public healthcare. ",
                ],
              },
              "And if you’re planning to move there permanently or acquire citizenship, this visa has your back. ",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Subclass 190 Visa Eligibility Requirements",
            texts: [
              {
                type: "ul",
                items: [
                  "Be younger than 45 at invitation time",
                  "Nominate an occupation on the Australian Skilled Occupation List ",
                  "Positive skills assessment for the nominated occupation",
                  "Minimum score of 65 points on the immigration points system",
                  "Demonstrate proficiency in the English language",
                  "Get nominated by a state or a territory ",
                  "Meet health and character requirements",
                ],
              },
              "The au 190 visa conditions ensure that only the best of applicants (that enrich the labour pool in Australia) are approved entry. ",
            ],
          },
          {
            title: "Points Test Understanding For AU 190 Visa",
            texts: [
              "The Au 190 visa finds its place in Australia’s points-based migration system. Applicants must have NO LESS than This qualifications to be eligible to apply 65 points which are given on following basis –  ",
              {
                type: "ul",
                items: [
                  "Fluency in the English language ",
                  "Work experience (Australia and overseas) ",
                  "Qualifications ",
                  "Partner’s skills ",
                  "Nomination by a state (+5 bonus points) ",
                ],
              },
              "The nomination itself adds to your count, frequently pushing candidates over the eligibility threshold. If you’re not sure of what your current points are, using a point’s calculator or talking to a Australia visa consultants can tell you what you stand at.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "190 Visa Application Process",
            texts: [
              "A list of occupations is published by every State or Territory which enlists the requirement of different skilled workers. ",
              "Applicants must submit an Expression of Interest or an EOI through skill selection. The EOI must contain your details like your qualifications, the nominated occupation and relevant skills. ",
              "If you receive a high point score, the Australian State or Territory will vie your EOI and decide if they would like to nominate you. ",
            ],
          },
          {
            title: "Apply for a 190 Skilled Nominated Visa",
            texts: [
              "Skill assessment: Have your occupation assessed by a relevant authority. ",
              "English Language Test: Test IELTS, PTE, TOEFL. ",
              "Submit an Expression of Interest (EOI) via Skill select.",
              "Submit your application for State Nomination: Select your state and apply for nomination. ",
              "Get an Invitation to Apply (ITA) — If chosen, you will receive an ITA. ",
              "Lodge your 190 visa application ",
              "Wait for a decision: Processing times are not uniform, but rather from 6 to 10 months.",
              "Each submission has to be accurate and timely. Errors or delays in this process could affect your eligibility or invitation.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Nominations By State and Territory",
            texts: [
              "Australia issues its Skilled Occupation List for each territory or state depending on regional labour market demand. You can nominate to states like:",
              {
                type: "ul",
                items: [
                  "South Australia ",
                  "Victoria",
                  "New South Wales ",
                  "Queensland",
                  "Western Australia ",
                  "Tasmania",
                  "Northern Territory",
                ],
              },
            ],
          },
          {
            title: "Australian Capital Territory",
            texts: [
              "For example, South Australia has following nomination streams: ",

              {
                type: "ul",
                items: [
                  "International Graduates",
                  "High Points Candidates",
                  "Talent and Innovators ",
                  "Long-Term Residents",
                ],
              },
              "Each state has its own other requirements such as residency, work experience or intention to reside there long term. It is critical to do your research where it concern the states requirement, the closer your profile matches the requirement, the better chances that you have.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "190 VISA Eligibility – Required Documents List",
            texts: [
              "Submitting a full 190 visa application, you will commonly require: ",
              {
                type: "ul",
                items: [
                  "Passport bio page ",
                  "Skills assessment result ",
                  "English test scores ",
                  "Educational documents ",
                  "Work experience letters ",
                  "Confirmation of state nomination",
                  "Police clearances ",
                  "Health examination records",
                  "Relationship documents (for dependents) ",
                ],
              },
              "Make sure all documents are certified and translated (if they are not in the English language). Making it less likely to be delayed or rejected.",
            ],
          },
          {
            title: "Processing Time For AU 190 visa",
            texts: [
              "The processing time for 6–10 months for the Au 190 visa is relatively faster, but this can vary depending on departments as well as how complete your application is. ",
              "State nomination: 4–12 weeks (synonyms may determine the state)",
            ],
          },
          {
            title: "Reasons to Choose Subclass 190 Visa",
            texts: [
              "If you want permanent residency in Australia with a backing of a state then the subclass 190 visa is the way to go forward, Given its clear advantage, strong eligibility structure and rising demand across states, the visa is among the stand-out migration options for skills. ",
              "The complete scope of 190 visa eligibility, understanding how to overcome state nomination, and meeting the strict 190 skilled nominated visa requirements may sound overwhelming—but, with the right approach, achievable. ",
              "We help you with faster immigration process, documentation, and easy facilitation of the visa to take you one step forward towards desired goal. Contact us and apply for subclass 190 visa with our accurate guidance.",
            ],
          },
        ]}
      />
    </>
  );
};

export default FamilyVisas;
