import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import React from "react";

import GeneralContent from "@/components/GeneralContent";
export const metadata = {
  title: "494 Visa | Prime Consultancy Consultancy",
  description:
    "Information and guidance for the Subclass 494 Skilled Employer Sponsored Regional Visa.",
};
const Four94Visa = () => {
  return (
    <>
      <Breadcrumb
        title={"494 Visa"}
        items={[
          { label: "Home", href: "/" },
          { label: "Migration" },
          {
            label: "494 Visa",
            active: true,
          },
        ]}
      />

      <FeatureContent
        subTitle="Choose the 494 Visa"
        title="Your Pathway to Regional Australia and Permanent Residency"
        description={[
          "Looking to live and work in Australia—but want something more secure than a temporary visa and more achievable than competitive independent visas?",
          "Let us introduce you to the Subclass 494 Visa (Skilled Employer Sponsored Regional – Provisional)—a visa designed to give skilled professionals like you a real, long-term future in regional Australia.",
          "We’re here to make your 494 visa journey faster, easier, and stress-free, lets see what makes it different from other visas and how we can help you achieve your immigration goals seamlessly.",
        ]}
        img1="/australia-flag.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "What Makes the 494 Visa Different?",
            texts: [
              "Unlike many other Australian work visas, the 494 visa offers a powerful balance between opportunity and accessibility.",
              "494 visa, is valid for 5 years and directly leads to permanent residency through the Subclass 191 Visa pathway after just 3 years of working in regional Australia.",
              "The subclass 494 visa doesn’t rely on points alone—it’s employer-sponsored, meaning you only need a job offer from an eligible regional business. We help you find one and walk you through every step.",
              "While cities like Sydney and Melbourne are competitive and expensive, regional areas offer lower costs of living, more community support, and a huge demand for skilled workers. The 494 visa was created to attract talent exactly like you.",
            ],
          },

          {
            title: "What You Get with the 494 Visa",
            texts: [
              "The Subclass 494 visa is built for skilled professionals ready to commit to a better lifestyle. Here’s what you can enjoy:",
              {
                type: "ul",
                items: [
                  "Live and work in regional Australia for up to 5 years",
                  "Apply for permanent residency after 3 years",
                  "Include your spouse and children in one application",
                  "Access public healthcare (Medicare)",
                  "Explore pathways to citizenship",
                  "Build a life in areas with growing job markets and better quality of life",
                ],
              },
              "And remember—this visa is designed for you if you’re ready to work and grow in regional Australia.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "494 Visa Eligibility",
            texts: [
              "Am I Eligible for the 494 Visa?",
              "<strong>You’re One Step Closer if You</strong>",
              {
                type: "ul",
                items: [
                  "Have a job offer from a regional employer",
                  "Are under 45 years of age",
                  "Work in an occupation listed on the Regional Occupation List",
                  "Have 3+ years of work experience in your field",
                  "Can show English proficiency (IELTS, PTE, etc.)",
                  "Pass the health and character checks",
                  "We’ll evaluate your profile for free and guide you on how to meet every requirement.",
                ],
              },
            ],
          },
          {
            title: "Subclass 494 - We Make It Easy for You",
            texts: [
              "We take care of the process so you don’t have to worry. Here’s what you can expect from us:",
              {
                type: "ul",
                items: [
                  "Free Profile Assessment – Know where you stand before you invest",
                  "Job Matching with Regional Employers – Get connected with companies that are ready to sponsor you",
                  "Skills Assessment Guidance – We ensure your qualifications meet Australian standards",
                  "Full Application Support – From documents to lodgement, we cover every step",
                  "Family Visa Assistance – Add your spouse and children with full support",
                  "Post-Visa Support – We help with relocation, settlement, and your PR transition",
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
              "Skilled Employer Sponsored Regional Visa — is a Future Plan",
            texts: [
              "Here’s what makes the 494 visa truly special: it’s one of the most direct paths to Australian permanent residency.If you:",
              {
                type: "ul",
                items: [
                  "Work full-time in regional Australia for 3 years",
                  "Earn the required minimum income",
                  "Follow all visa conditions",
                ],
              },
            ],
          },
          {
            title: "Regional Areas You Can Choose",
            texts: [
              "Australia offers vibrant regional hubs with excellent job opportunities, including:",
              {
                type: "ul",
                items: [
                  "South Australia (Adelaide and beyond)",
                  "Regional Victoria",
                  "Queensland (excluding Brisbane metro)",
                  "Tasmania",
                  "Western Australia (outside Perth metro)",
                  "Northern Territory",
                  "New South Wales (excluding Sydney metro)",
                  "ACT (in select streams)",
                ],
              },
              "We help you pick the best location based on your occupation, lifestyle preference, and growth opportunities.",
            ],
          },
          {
            title: "Why Choose Us for Your 494 Visa?",
            texts: [
              "We’re experienced, trusted, and fully committed to your success.",
              {
                type: "ul",
                items: [
                  "100% visa success rate for eligible clients",
                  "Fast and personalized support",
                  "Strong connections with regional employers",
                  "End-to-end help—from eligibility to post-landing support",
                  "A clear migration plan designed just for you",
                ],
              },
              "We don’t just file applications—we build futures.",
              "Contact us to access your opportunity through Skilled Employer Sponsored Regional Visa and know more about Subclass 494 Visa.",
            ],
          },
        ]}
      />
    </>
  );
};

export default Four94Visa;
