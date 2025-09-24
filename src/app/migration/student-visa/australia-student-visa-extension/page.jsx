import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import React from "react";

import GeneralContent from "@/components/GeneralContent";

const SubclassStudentGuardianVisa = () => {
  return (
    <>
      <Breadcrumb
        title={"Australia Student Visa Extension"}
        items={[
          { label: "Home", href: "/" },
          { label: "Migration" },
          { label: "Student Visa", href: "/migration/student-visa" },
          { label: "Australia Student Visa Extension", active: true },
        ]}
      />
      <FeatureContent
        subTitle="Get Your"
        title="Student Visa Extension in Australia"
        description={[
          "Everything You Need to Know About Student Visa Extension",
          "There are various reasons for which individuals intend to renew and extend their visas.  From extending their stay to studying a new course. Let’s take a look at how one can expedite this process seamlessly.",
        ]}
        img1="/student-reading.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Do You Need to Apply For Student Visa Extension?",
            texts: [
              "First things first—not all students need to extend their visa. If your current student visa covers your entire study duration and time for graduation, you’re good. However, you’ll need to apply for a student visa extension if:",
              {
                type: "ul",
                items: [
                  "Your current visa expires before you complete your course",
                  "You’re starting a new program or degree",
                  "You’ve failed a subject and need more time to finish",
                  "You’ve taken a leave of absence or reduced your study load",
                  "You want to stay for graduation, bridging visas, or professional year programs",
                ],
              },
              "No matter your reason, the process is similar—but your supporting documents will differ slightly based on your situation.",
            ],
          },

          {
            title: "Student Visa Extension Requirements in Australia",
            texts: [
              "In order to be eligible you have to be fulfil these criteria- ",
              {
                type: "ul",
                items: [
                  "You must be enrolled in a full-time registered course ",
                  "Maintain Overseas Student Health Cover  for the full duration of your extended stay",
                  "Show evidence of sufficient financial funds to support yourself",
                  "Meet English language proficiency standards ",
                  "Comply with previous visa conditions attendance, academic performance, etc.",
                  "Maintain genuine temporary entrant status—proving your primary purpose in Australia is education",
                ],
              },
              "The Department of Home Affairs assesses each extension request carefully. If you have followed your student visa conditions so far, your chances are high. If there has been any mistake you would need to explain them clearly in your application. Also, it is better to avoid any last minute complication and mistake.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Documents Required For Study Permit Extension",

            texts: [
              "Your application for a student visa extension must be backed by complete and accurate documentation. Missing documents or inconsistencies can lead to delays or rejection. Here’s what you’ll need to prepare:",
              {
                type: "ul",
                items: [
                  "<strong>New Confirmation of Enrolment</strong></br>It is required if you’re continuing in your current program, changing to a new course, or starting a higher qualification.",
                  "<strong>Valid Passport</strong></br>Your passport should be valid for the entire duration of your intended stay.",
                  "<strong>Get Overseas Student Health Cover</strong></br>You must extend your overseas student health cover with confirmation of enrolment to match your new and visa duration.",
                  "<strong>Financial Evidence</strong></br>You may need to show you have sufficient funds to cover your tuition fees, living expenses, travel costs, and those of any accompanying family members.",
                  "<strong>Genuine Temporary Entrant Statement</strong></br>This personal statement must explain your reasons for studying in Australia, your study progression, and future plans.",
                  "<strong>Academic Records</strong></br>Transcripts or results that show your progress and reasons for course extension if applicable.",
                  "<strong>English Language Test Scores</strong></br>If required by your course or immigration status, include your IELTS, PTE, or TOEFL scores.",
                  "<strong>Personal Documents</strong></br>These may include a birth certificate, relationship documents (if you’re including dependents), and police clearance if requested.",
                ],
              },
              "We recommend keeping all your documents updated and scanned before starting the application.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "How to Apply for a Student Visa Extension in Australia",

            texts: [
              "You can apply for student visa extension in Australia after gathering all your documents, here’s how the application process works:",
              {
                type: "ul",
                items: [
                  "<strong>Confirmation of enrolment</strong></br>Contact your education provider and request a new Confirmation of Enrolment.",

                  "<strong>Extend Your overseas health card</strong></br>Purchase coverage that matches your extended study duration. This is mandatory for your application.",

                  "<strong>Apply Online</strong></br>Submit your student visa extension application through the official Department of Home Affairs portal. Attach all required documents and pay the visa fee.",
                  "<strong>Stay Lawfully in Australia</strong></br>if your current visa expires before a decision is made, you’ll be issued a Bridging Visa to keep you lawful in Australia during processing.",
                ],
              },
              "Wait for the Outcome </br>Processing times may vary, but a complete and well-prepared application is typically processed faster. On average, it may take 1 to 3 months.",
            ],
          },
          {
            title: "Tips for a Successful Visa Extension",
            texts: [
              {
                type: "ul",
                items: [
                  "Apply early always avoid last minute effort to avoid any hassle.",
                  "n case you are late explain your reasons clearly to authority.",
                  "Most importantly seek professional guidance.",
                ],
              },
              "With our expert team, we will   guide you with student visa extensions and make the whole process easy from beginning.",
            ],
          },
        ]}
      />
    </>
  );
};

export default SubclassStudentGuardianVisa;
