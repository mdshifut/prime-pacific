import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import React from "react";

import GeneralContent from "@/components/GeneralContent";

const StudentVisa = () => {
  return (
    <>
      <Breadcrumb
        title={"Student Visa"}
        items={[
          { label: "Home", href: "/" },
          { label: "Migration" },
          { label: "Student Visa", active: true },
        ]}
      />
      <FeatureContent
        subTitle="Get Your"
        title="Australia Student Visa"
        description={[
          "The Australia Student Visa can be availed by those who wish to study in Australia and have registered themselves in a course registered under the Commonwealth Register of Institutions and Courses for Overseas Students (CRICOS). The Student visa allows an individual to live in Australia for a maximum of 5 years or in accordance with the registered course period. With the Student Visa, a student is entitled to enroll himself/ herself in a full-time course registered under CRICOS and will also be allowed to work part-time in Australia for as much as 40 hours per fortnight. A student may also bring their family to Australia with a student visa.",
          "A student will be able to travel to and from Australia while the validity of the student visa. You may also take part in different training modules where you can improve your knowledge and skills. All the requirements must be satisfied to find yourself eligible for the student visa.",
          "There are to categories of the student visa",
          "<a href='student-visa/subclass-500-student-visa/'>Student Visa (subclass 500)</a>",
          "<a href='student-visa/subclass-590-student-guardian-visa/'>Student Guardian Visa (subclass 590)</a>",
        ]}
        img1="/student-visa.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title:
              "Prime Pacific Consultancy - Best Australia Student Visa Consultants",
            texts: [
              "If you are willing to apply for any of the aforesaid categories of student visa, then Prime Pacific Consultancy can exactly help you in this regard. Our Australia student visa consultants will guide you in every possible manner and will make you submit the most perfect kind of application to the concerned immigration department.",
              "Our experts will first assess the nature of your personal situations and will then recommend a visa, which will be the most suitable for you. Our Australia student visa agent will assist you in executing every of the official formalities in a successful manner that will lead to a successful and hassle free visa procurement session.",
            ],
          },
        ]}
      />
    </>
  );
};

export default StudentVisa;
