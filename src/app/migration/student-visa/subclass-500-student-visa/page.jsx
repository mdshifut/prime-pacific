import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";

import GeneralContent from "@/components/GeneralContent";

export const metadata = {
  title: "Subclass 500 Student Visa | Prime Pacific Consultancy",
  description:
    "Information and expert guidance for the Subclass 500 Student Visa in Australia, including application tips and requirements.",
};
const StudentVisa = () => {
  return (
    <>
      <Breadcrumb
        title={"Subclass 500 Student Visa"}
        items={[
          { label: "Home", href: "/" },
          { label: "Migration" },
          { label: "Student Visa", href: "/migration/student-visa" },
          { label: "Subclass 500 Student Visa", active: true },
        ]}
      />
      <FeatureContent
        subTitle="Get Your"
        title="Subclass 500 Student Visa"
        description={[
          "The Subclass 500 Student Visa allows international students to live, study, and work in Australia while enrolled in a full-time course at a registered institution. This visa offers up to 5 years of stay, part-time work rights, and the opportunity to bring family members. However, the application process involves strict Genuine Temporary Entrant (GTE) requirements, financial proof, English proficiency, and health insurance (OSHC).",
          "At Prime Pacific Consultancy, our experienced student visa consultants guide you through every step of the application, ensuring your documents are accurate and meet Australian immigration standards. We help with course selection, GTE statements, visa documentation, and appeals for refusals—maximizing your chances of a successful outcome. Let Prime Pacific Consultancy simplify your journey to studying in Australia! Contact us today for expert assistance.",
          "There are to categories of the student visa. They are:",
          "<a href='/migration/student-visa/subclass-500-student-visa/'>Student Visa (subclass 500)</a>",
          "<a href='/migration/student-visa/subclass-590-student-guardian-visa/'>Student Guardian Visa (subclass 590)</a>",
        ]}
        img1="/students.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Contact Prime Pacific Consultancy For Student Visa 500",
            texts: [
              "If you are willing to apply for any of the aforesaid categories of student visa, then Prime Pacific Consultancy can exactly help you in this regard. Our team of immensely knowledgeable experts will guide you in every possible manner and will make you submit the most perfect kind of application to the concerned immigration department.",
              "Our experts will first assess the nature of your personal situations and will then recommend a visa, which will be the most suitable for you. They will assist you in executing every of the official formalities in a successful manner that will lead to a successful and hassle free visa procurement session.",
            ],
          },
        ]}
      />
    </>
  );
};

export default StudentVisa;
