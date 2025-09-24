import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import React from "react";

import GeneralContent from "@/components/GeneralContent";

const PartnerVisaAustralia = () => {
  return (
    <>
      <Breadcrumb
        title={"Partner Visa Australia"}
        items={[
          { label: "Home", href: "/" },
          { label: "Migration" },
          { label: "Family Visas", href: "/migration/family-visas" },
          { label: "Partner Visa Australia", active: true },
        ]}
      />
      <FeatureContent
        subTitle="Partner Visa Australia"
        title="Expert Guidance for a Hassle-Free Application"
        description={[
          "It is complex to navigate Partner Visa for Australia. With expert advice, you can ensure to get a hassle-free and successful application completed. We are professional partner visa Australia agent with decades of experience. You can get our realistic advice in document preparation, and personalized attention throughout the whole visa process. We strive to make the application as simple as it can be made from Australia or abroad.",
        ]}
        img1="/partner.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title:
              "Understanding the Various Types of Partner Visas in Australia",
            texts: [
              "There are a number of partner visa or Spouce Visa subclasses in Australia, and each is suited for various relationship scenarios. The appropriate visa subclass must be obtained. An incorrect application will lead to delays or denial. Below are the main partner visa choices that can be considered.",
            ],
          },

          {
            title: "Prospective Marriage Visa (Subclass 300)",
            texts: [
              "The Prospective Marriage Visa, or fiancé visa, is meant for engaged couples who intend to marry in Australia. The visa permits the foreign spouse to travel to Australia, marry his or her sponsor within nine months. You need to be genuine in marriage and settling as a couple. The visa is perfect for individuals who would prefer to legalize their relationship early in Australia.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Temporary Partner Visa (Subclass 820)",

            texts: [
              "Temporary Partner Visa (Subclass 820) is for marital partners who are already in Australia. It allows the applicant to remain, work, and study in Australia. This is while his or her application for his or her permanent visa is being processed. To qualify, the couple must show to have a genuine and continuing relationship. This can be evidenced by mutual financial commitments, mutual living and mutual social recognition of the relationship. The applicant can apply for permanent residency two years from the date of approval of the temporary visa.",
            ],
          },
          {
            title: "Permanent Partner Visa (Subclass 801)",
            texts: [
              "The Permanent Partner Visa (Subclass 801) is the second stage of the partner visa application. This is for applicants who originally applied onshore (Subclass 820). After two years of continuous and authentic relationship, the applicant can apply for permanent residence. The Department of Home Affairs will verify if the relationship is authentic before granting this visa. The right of residency and the right to claim Medicare and social security benefits follow successful applicants.",
            ],
          },
          {
            title: "Offshore Partner Visa (Subclass 309/100)",
            texts: [
              "In the case where the applicant is not yet settled in Australia, the Offshore Partner Visa is the right route. The temporary one is the Subclass 309, which can be used by the partner to visit and settle in Australia. Just like the onshore visa, the couple has to show that the relationship is genuine and continuing. Two years later, if all goes well and the relationship holds, permanent residence is granted to the applicant.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title:
              "Steps to the Submission of a Partner Visa Australia Application",
            texts: [
              "Sponsored Parent Visa is a temporary visa stream that allows the parents of Australian citizens, permanent residents, or eligible New Zealand citizens visiting Australia to stay for up to 3 or 5 years in Australia. This visa stream is ideal for parents who want to live with their children and spend quality time with them.",
            ],
          },
          {
            title: "Step 1: Find Out Whether You Are Eligible",
            texts: [
              "Before you may lodge your application, you are required to be meeting the bare minimum. You need to be in an actual relationship with a citizen of Australia. You can be permanent resident, or qualifying citizen of Australia. Both married and de facto couples are covered. It needs to be exclusive, ongoing, and a relationship of family and friends.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Step 2: Lodge a Complete and Correct Application",
            texts: [
              "Once your documents are ready, lodge your application online via the Department of Home Affairs website. Double-check all your forms accurately, as any erroneous information will delay you. Pay applicable visa fees that are charged based on visa subclass.",
            ],
          },
          {
            title: "Step 3: Reply to Immigration Authorities’ Requests",
            texts: [
              "Upon submission, the Department may call for more information or an interview. Respond as early as possible to prevent delay. The possibility of rejection is minimal if your application is well-prepared.",
            ],
          },
          {
            title: "Step 4: Get Visa Approval and Prepare to Move",
            texts: [
              "If approved, you can then go to Australia (overseas) or stay with your partner (local vicinity). Temporary visa holders can go ahead with the second part of their permanent residence application.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Use Our Services to Apply for Partner Visa Australia",
            texts: [
              {
                type: "ul",
                items: [
                  "Professionalism: Our migration agents keep us updated regularly with the latest visa regulations.",
                  "Personalized Guidance: We approach based on your requirements.",
                  "Greater Chances of Success: Well-prepared applications lower the risk of rejection.",
                  "Hassle-Free Application Process: We deal with complex forms, so you can concentrate on your relationship. ",
                ],
              },
            ],
          },
          {
            title: "Begin your Spouse Visa Australia Journey Today",
            texts: [
              "You can take your loved one with you to Australia with proper counselling. Contact us today and have us walk you through the preparation of a good visa application… Your decision to be together in Australia is made possible!",
            ],
          },
        ]}
      />
    </>
  );
};

export default PartnerVisaAustralia;
