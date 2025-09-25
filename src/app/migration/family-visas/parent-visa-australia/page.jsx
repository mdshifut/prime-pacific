export const metadata = {
  title: "Parent Visa Australia | Prime Consultancy Consultancy",
  description:
    "Visa options and support for parents joining children in Australia.",
};
import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import React from "react";

import GeneralContent from "@/components/GeneralContent";

const ParentVisaAustralia = () => {
  return (
    <>
      <Breadcrumb
        title={"Parent Visa Australia"}
        items={[
          { label: "Home", href: "/" },
          { label: "Migration" },
          { label: "Family Visas", href: "/migration/family-visas" },
          { label: "Parent Visa Australia", active: true },
        ]}
      />
      <FeatureContent
        subTitle="Get Your"
        title="Parent Visa Australia"
        description={[
          "Have you recently migrated to Australia and found yourself longing for the presence of your parents? Do you miss having your parents with you? You are not alone!",
          "It’s natural that these are sentiments shared by every foreigner to start a family life and wish to celebrate each of their special moments with their parents.",
          "Living with parents in a foreign country like Australia is not just about giving them a new home; it’s about creating a legacy of memories in a country that is familiar due to its norms and family values. It is also about watching your parents happy and marvel at the Australia or simply enjoying with them peacefully in the backyard of your home in Australia. ",
          "If you are looking for suitable visa options based on your parents’ and your own personal circumstances, in that case, Parent Visa Australia is a perfect match for you and your family’s unique needs.",
        ]}
        img1="/grand-father.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "What is a Parent Visa Australia ?",
            texts: [
              {
                type: "blockquote",
                text: "“Parent Visa Australia is a pathway for overseas parents who want to join their children who are already settled as Australian citizens, permanent residents, or eligible New Zealand citizens residing in Australia.“",
              },
              "Parent visas Australia within the family visa stream are designed to reunite parents with their children in Australia. The stream contains both temporary and permanent streams.",
              "Each year, the Australian Government outlines the specific numbers and types of visas to be provided under Australia’s Migration Program, which includes the Family Visa Australia stream. For the financial year 2022–23, the Australian Government allocated a planning level of 52,500 places to the family stream of the Migration Program.",
              "It has never been an easy task to sponsor/bring your parents to Australia. However, there are various suitable family visa streams in Australia that offer multiple pathways for reuniting your parents, each with its own set of requirements and benefits to accommodate your parents based on different situations and your unique family needs.",
            ],
          },

          {
            title: "Australia Parent Visa Options",
            texts: [
              "This visa stream allows eligible New Zealand citizens to live and work in Australia permanently to make a contribution to its economy.",
              "<strong>Note:</strong> The Skilled Independent (subclass 189) (New Zealand stream) visa has been permanently closed to new applications since July 1, 2023. For more up-to-date information, see recent Department of Home Affairs changes. ",
              {
                type: "ul",
                items: [
                  "Contributory Parent Visa (Subclass 143)",
                  "Contributory Parent (Temporary) Visa (Subclass 173)",
                  "Sponsored Parent (Temporary) Visa (Subclass 870)",
                  "Aged Parent Visa (Subclass 804)",
                  "Contributory Aged Parent (Temporary) Visa (Subclass 884)",
                  "Contributory Aged Parent Visa (Subclass 864)",
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
            title: "Contributory Parent Visa Australia",

            texts: [
              "A contributory parent visa is a pathway designed for overseas parents to join their child in Australia as permanent residents. This visa also lets them apply for citizenship after living a few years down under. ",
              "This visa is known as a “contributory” parent visa due to the significant investment required during the application process, which is around AUD 40,000 for the main applicant. This reflects the value and commitment to family unity.",
              "Contributory parent visas are allocated to parents who are not yet retired, allowing them to join their children who are already settled in Australia as permanent residents.",
            ],
          },
          {
            title: "Temporary Parent Visa Australia (Subclass 173)",
            texts: [
              "Temporary parent visa Australia is a gateway for parents who intend to go to Australia temporarily for up to two years. This visa is an initial step toward permanent residency. It grants you the freedom to work and study but is a one-time journey. To extend your stay in Australia as a permanent resident, you must transition your visa to subclass 143. ",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Permanent Parent Visa Australia (Subclass 143)",
            texts: [
              "This permanent visa stream is considered an anchor in Australia that offers permanent residency. You can apply directly without the prerequisite of two years of living in Australia. You can apply directly for this visa category, or alternatively, you may start with the subclass 143 visa.",
            ],
          },
          {
            title: "Sponsored Parent (Temporary) Visa (Subclass 870)",
            texts: [
              "Sponsored Parent Visa is a temporary visa stream that allows the parents of Australian citizens, permanent residents, or eligible New Zealand citizens visiting Australia to stay for up to 3 or 5 years in Australia. This visa stream is ideal for parents who want to live with their children and spend quality time with them.",
            ],
          },
          {
            title: "Contributory Aged Parent Visa Australia",
            texts: [
              "Contributory aged parent visas offer both a permanent or temporary residency pathway for retired parents of settled Australian citizens, Australian permanent residents, or eligible New Zealand citizens who wish to reside in Australia.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Contributory Aged Parent Visa Australia",
            texts: [
              "This temporary visa stream allows old parents to stay in Australia temporarily. It is an initial step through which you can apply for a subclass 864 visa to obtain permanent residency.",
            ],
          },
          {
            title: "Contributory Aged Parent (Permanent) Visa (Subclass 864)",
            texts: [
              "This subclass is a permanent stream that lets the aged parents stay in Australia permanently. It is called “contributory” because applicants must pay the higher visa application charges, which contribute towards their health and welfare costs in Australia.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Contributory Aged Parent (Permanent) Visa (Subclass 864)",
            texts: [
              "To be eligible for the Parent Visa under Family Visa Australia, applicants must:",
              {
                type: "ul",
                items: [
                  "Be a biological parent, legal (including adoptive), or step-parent of the child who can be settled in Australia as a citizen, permanent resident, or eligible New Zealand citizen in Australia.",
                  "Be sponsored by an eligible sponsor/child living legally for at least two years in Australia.",
                  "Fulfil the requirements of the balance-of-family test, which requires at least half of your children to live in Australia legally.",
                  "Assure your financial support by your sponsor child that you will not rely on the Australian Government for financial aid after you arrive in Australia. ",
                  "Meet the health and character requirements as allocated by the Australian immigration authorities.",
                ],
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default ParentVisaAustralia;
