import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import GeneralContent from "@/components/GeneralContent";

export const metadata = {
  title: "Temporary Graduate Visa (Subclass 485) | Prime Pacific Consultancy",
  description:
    "Comprehensive guidance on the Temporary Graduate Visa (Subclass 485) for Australia. Learn about eligibility, streams, and post-study work opportunities from Prime Pacific Consultancy.",
};
const Subclass485TemporaryGraduateVisaAustralia = () => {
  return (
    <>
      <Breadcrumb
        title={"Subclass 485 Temporary Graduate Visa Australia"}
        items={[
          { label: "Home", href: "/" },
          { label: "Temporary Visa", href: "/temporary-visa" },
          {
            label: "Subclass 485 Temporary Graduate Visa Australia",
            active: true,
          },
        ]}
      />
      <FeatureContent
        subTitle="Temporary Graduate Visa Australia 485 Visa"
        title="Live, Work, and Study in Australia"
        description={[
          "Temporary Graduate Visa Australia is designed for international students who have recently completed their graduate degrees from Australian institutes. This visa stream lets you live, work, and study in Australia for a temporary period of time.<strong> A temporary graduate visa (subclass 485) offers multiple entries to the country within the specified period.</strong>",
          "After graduation, the Subclass 485 visa stream provides students with an opportunity to gain invaluable experience in their relevant fields in Australia. This visa stream also allows international students to add their family members and dependents to their application form, but each member must pay the application fee separately. With this visa subclass 485, students can also gain permanent residence in Australia after fulfilling the eligibility criteria.",
        ]}
        img1="/graduate.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title:
              "What are the Different Visa Streams of <strong>Subclass 485</strong>?",
            texts: [
              {
                type: "ul",
                items: [
                  "<strong>The Post Vocational Stream Work Stream</strong> (Formerly Graduate Work stream)",
                  "<strong>The Post Higher Education Work Stream</strong> (Formerly Post Study Work stream)",
                  "<strong>The Second Post Higher Education Work Stream</strong> ( Formerly Second Post Work Stream)",
                ],
              },
            ],
          },
          {
            title: "The Post-Higher  <strong>Education Work Stream</strong>",
            texts: [
              {
                type: "ul",
                items: [
                  "The Post-higher education workstream, replaced with a post-study work stream, is designed for overseas students who have just received their degree from an Australian university. This visa stream lets those students live, study and work in Australia temporarily after completing their studies. According to the recent changes, applicants must submit a recent degree in​ CRICOS-registered courses​ , and the minimum eligible age is reduced to 35 years. However, Hong Kong and British national passport holders must be under 50 while applying.",
                  "Live and work for approximately two to four years. ",
                  "A bachelor’s degree (including honours) will last up to 2 years.",
                  "For masters (coursework and extended), the stay will be up to 2 years.",
                  "For Master’s (research) and doctoral degrees (PhD), the stay will be up to 3 years.",
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
            title:
              "The Second Post <strong>Higher Education Work Stream</strong>",
            texts: [
              "The second post-higher education work stream is designed for certain overseas graduates (holding a Post-Higher Education Work and Post-Study Work) who have completed their studies in regional Australia. This visa allows me to live, study, and work in Australia temporarily. The applicant must be under the age of 35 when they apply. However, Hong Kong and British national passport holders must be under 50 while applying. ",
              {
                type: "ul",
                items: [
                  "Study, work and stay in Australia temporarily (1 to 2 years).",
                  "Extend their stay to gain work experience in Australia.",
                  "Bring their parents or dependents to Australia.",
                ],
              },
            ],
          },
          {
            title: "Eligibility Criteria for a Temporary Graduate Visa 485",
            texts: [
              "<strong>Average Age Requirements</strong>",
              "According to the New Migration Strategy, the age requirement has decreased from 50 to 35. Now, candidates (applications submitted after March 23, 2024) must be under 35 to apply for this visa.<br/> However, the exceptions apply to Master’s (research) and doctoral degree (PhD) graduates, as well as Hong Kong and British National Overseas passport holders, who must be under 50 years of age while applying for SC 485.",
            ],
          },
          {
            title: "Financial Capacity Requirements",
            texts: [
              "The new financial requirement applicable to visas lodged on or after May 10, 2024, will be $29,710 for both individual student and student guardian visas in Australia.",
            ],
          },
          {
            title: "Genuine Student Requirements",
            texts: [
              "From March 23, 2024, the new Genuine Student (GS) requirement has replaced the previous Genuine Temporary Entrant (GTE) requirement for the students, which was listed with target questions. This is effective for the student visa applications that are lodged on and after March 23, 2024.",
            ],
          },
        ]}
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "English Language Requirements For Subclass 485 Visa",
            texts: [
              "From March 23, 2024, the new <strong>Genuine Student (GS) requirement has replaced the previous Genuine Temporary Entrant (GTE) requirement for the students,</strong> which was listed with target questions. This is effective for the student visa applications that are lodged on and after March 23, 2024.",
            ],
          },
          {
            title: "Health & Character <strong>Requirements</strong>",
            texts: [
              "International students must meet specific health and character requirements that the Department of Home Affairs sets. To apply for Subclass 485 Visa, you must ensure that you have not engaged in any criminal activity in the past and must hold a police clearance certificate to demonstrate good character. Moreover, you must not be suffering from any medical illness that can affect the Australian community. ",
            ],
          },
          {
            title: "Overseas Student Health <strong>Cover Insurance</strong>",
            texts: [
              "International students must meet specific health and character requirements that the Department of Home Affairs sets. To apply for Subclass 485 Visa, you must ensure that you have not engaged in any criminal activity in the past and must hold a police clearance certificate to demonstrate good character. Moreover, you must not be suffering from any medical illness that can affect the Australian community. ",
            ],
          },
        ]}
      />
    </>
  );
};

export default Subclass485TemporaryGraduateVisaAustralia;
