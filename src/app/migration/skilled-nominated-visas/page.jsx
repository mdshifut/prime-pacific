import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import React from "react";

export const metadata = {
  title: "Skilled Nominated Visas | Prime Consultancy Consultancy",
  description: "Information and support for Australia Skilled Nominated Visas.",
};
import GeneralContent from "@/components/GeneralContent";

const SkilledNominatedVisas = () => {
  return (
    <>
      <Breadcrumb
        title={"Skilled Nominated Visas"}
        items={[
          { label: "Home", href: "/" },
          { label: "Migration" },
          { label: "Skilled Nominated Visas", active: true },
        ]}
      />
      <FeatureContent
        subTitle="Build a Bright Future with an"
        title="Australia Skilled Visa"
        description={[
          "Want sunny beaches, lively cities, and many job opportunities?   Australia’s Skilled Migration Visa may fulfil your goal!   Australia needs clever engineers, healthcare professionals, IT specialists, and skilled craftsmen to grow its economy. We streamline Australia skilled visa applications and ensure success.   Our years of knowledge help you choose the right visa and submit a great application. This will increase your chances of approval.",
        ]}
        img1="/future.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title:
              "Why Australia is Best for <strong>Skilled Workers</strong>?",
            texts: [
              "Australia is lifestyle, not just country.   Australia has the best quality of life. This is due to its high standard of living, world-class healthcare and top-tier education.   ",
              {
                type: "ul",
                items: [
                  "<strong>Strong Economy, High Skilled Talent Demand:</strong> The Australian economy is strong and growing, yet major industries lack skills.   The government aggressively employs foreign professionals to fill these positions, so your talents may be needed.   Healthcare, engineering, IT, and construction welcome skilled newcomers.",
                  "<strong>Permanent Residence Options:</strong> Australia provides competent people clear and practical avenues to PR, unlike many other countries.   The Australia Skilled Visa and Skilled Nominated Visa allow direct PR to live, work, and settle in Australia.",
                  "<strong>Unbelievable Work-Life Balance:</strong> Imagine leaving work for a sunny beach, lush national park, or busy cultural centre.   Work-life balance is renowned in Australia, a relaxed but vibrant culture.",
                  "<strong>A tolerant, multicultural society:</strong> Australia, a diverse nation, has over 30% foreign-born citizens. Communities from throughout the world help you feel at home quickly. If this sounds like your dream future, check the Australia skilled migration list for your skills.",
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
              "Australia Skilled Migration List:<strong> Get a Job and Visa</strong>",
            texts: [
              "Australia’s skilled immigration policy targets high-demand jobs.   The government updates its Skilled Occupation Lists (SOL) to satisfy labour market needs.",
              "The following Australian jobs are in demand long-term.   Permanent skilled visas for MLTSSL professionals include:",
              {
                type: "ul",
                items: [
                  "Unsponsored skilled independent visa (Subclass 189)—for in-demand expertise.",
                  "Subclass 190 Skilled Nominated Visa—For Australian state or territory government nominees.",
                  "Australian firms can nominate skilled workers under Subclass 186.",
                  "Skilled jobs for short period",
                ],
              },
              "Popular jobs may not lead to permanent residency.   State nomination or company sponsorship can lead to PR in several of these fields.",
            ],
          },
          {
            title: "STSOL <strong>Visas</strong>",
            texts: [
              "The Temporary Skill Shortage Visa lets you work in Australia for four years with an approved employer.",
              "Subclass 491 Skilled Work Regional (Provisional) Visa—May lead to permanent residency in regional Australia if met.",
            ],
          },
          {
            title: "Regional <strong>Occupation List </strong>",
            texts: [
              "Regional Occupation List (ROL) visas offer significant benefits for living beyond Sydney and Melbourne. Regional visas have lesser points and faster processing, thus candidates prefer these.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Reasons to <strong> Consider Regional Australia?</strong>",
            texts: [
              {
                type: "ul",
                items: [
                  "Priority regional visa applications are handled faster.",
                  "Do regional work to boost your visa application.",
                  "Regional visas can lead to permanent residency after a few years.",
                  "Australia offers a city or area for you.   We’ll walk through Australian skilled worker visa application.",
                ],
              },
            ],
          },
          {
            title:
              "Step-by-Step <strong>Australia Skilled Visa Application</strong>",
            texts: [
              "Despite its complexity, the Australia skilled visa application process is manageable with guidance.",
              "The primary visa-securing steps are:",
              "<strong>Step 1:</strong> verify your occupation on skilled migration lists.",
              "Check your MLTSSL, STSOL, or ROL profession.   Continue if so.   If not, consider another visa or up skilling.",
              "<strong>Step 2:</strong> Skills Test—Verify Your Skills",
              "Most skilled visas require a field expert’s testing.   The qualifications and experience are Australian-standard.   Find out which organisation evaluates your job.",
              "<strong>Step 3:</strong> Skill Select EOI",
              " Australia uses Skill Select for online migration registration.   List your skills, experience, and qualifications.   Visa applications will be requested.",
              "<strong>Step 4:</strong> Invitation and Visa Application",
              "Visa applications are invited if your EOI is accepted.   At this point, your application must contain all documents, health testing, and police clearances.",
              "<strong>Step 5:</strong> Wait for Approval and Move!",
              "Once granted, you can start your new life in Australia! Visa processing dates vary by kind.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title:
              "Why Prime Pacific Consultancy for <strong>Australia Skilled Visa</strong>?",
            texts: [
              "Getting an Australia skilled visa is difficult.   Migration is simplified by us.   How we help:",
              {
                type: "ul",
                items: [
                  "Our skilled migration consultants know visa laws and will tailor a strategy to maximise success.",
                  "We handle everything from skills evaluations to visa lodgement.",
                  "Increased Approval Rates: Our knowledge leads to successful applications.",
                  "Customised Service: We work with you to achieve your particular goals.",
                ],
              },
            ],
          },
          {
            title:
              "Apply For Skilled Worker Visa in <strong>Australia Today!</strong>",
            texts: [
              "The best time to move to Australia is now. This is due to its increasing job market, great lifestyle, and permanent residency options.   Medical, engineering, IT, trades and many skilled worker needed. Embark on your Australian dream with confidence. Apply for Australia skilled visa with confidence and ease. Control your future and Contact us today.",
            ],
          },
        ]}
      />
    </>
  );
};

export default SkilledNominatedVisas;
