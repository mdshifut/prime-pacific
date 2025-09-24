import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import React from "react";

import GeneralContent from "@/components/GeneralContent";

const SubclassStudentGuardianVisa = () => {
  return (
    <>
      <Breadcrumb
        title={"Subclass 590 Student Guardian Visa"}
        items={[
          { label: "Home", href: "/" },
          { label: "Migration" },
          { label: "Student Visa", href: "/migration/student-visa" },
          { label: "Subclass 590 Student Guardian Visa", active: true },
        ]}
      />
      <FeatureContent
        subTitle="Visa 590"
        title="Student Guardian Visa"
        description={[
          "Subclass 590 student guardian visa allows you to stay in Australia as a guardian of a Student Visa holder. You can visit Australia to support an international student visa holder under 18 years of age or older.",
        ]}
        img1="/gurdian-student.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Subclass 590 Visa Processing Time",
            texts: [
              {
                type: "ul",
                items: [
                  "21 days to finalize 25% of applications",
                  "45 days to process 50% of applications",
                  "4 months to process 75% of applications",
                  "9 months to process 90% of applications",
                ],
              },
            ],
          },

          {
            title: "590 Visa Eligibility",
            texts: [
              "To be eligible for a Student Guardian Visa, you must:",
              {
                type: "ul",
                items: [
                  "Be a relative, custodian, parent of an international student who’s 21 years of age or older",
                  "Have enough financial resources to support yourself and the student during your whole stay period in Australia",
                  "Support the student with accommodation, welfare, and other services",
                  "Hold a substantive visa",
                  "Be a Genuine Temporary Entrant (GTE).",
                  "Meet the health and character requirements",
                  "Sign the Australian Values Statement to prove that you’ll follow Australian law.",
                  "Have no debts to the Australian Government. If you owe money, you must have arranged to pay it back.",
                  "Not have had a visa application refused before applying to subclass 590.",
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
            title: "Student Guardian Visa Cost",

            texts: [
              "A Student Guardian Visa costs around AUD 630. You also have to pay for biometrics, health checks, and police certificates for a 590 visa.",
              "If any of your family members also apply with you for visa 590, there’ll be separate charges for them.",
            ],
          },
          {
            title: "Guardian Visa Stay Period",
            texts: [
              "A Student Guardian Visa 590 is a temporary visa. Your stay period on visa 590 depends on the stay of the student visa holder and their age.",
            ],
          },
          {
            title: "Subclass 590 Benefits",
            texts: [
              {
                type: "ul",
                items: [
                  "Visit Australia and support an international student on Student Visa who’s 18 years old or above 18 in an exceptional case.",
                  "Provide care and support to more than one student",
                  "Enroll in an English Language Intensive Course for Overseas Students (ELICOS) for less than 20 hours per week, or take any other type of study or training for not more than 3 months.",
                  "Prime Pacific Consultancy is a Registered Australian company working under the law of Australia. The objective is to provide authentic and affordable visa consultancy and education services in Australia.",
                ],
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default SubclassStudentGuardianVisa;
