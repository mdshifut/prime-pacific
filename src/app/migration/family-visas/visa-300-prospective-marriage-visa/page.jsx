export const metadata = {
  title: "Visa 300 Prospective Marriage Visa | Prime Consultancy",
  description:
    "Guidance for Prospective Marriage Visa (Subclass 300) applications in Australia.",
};
import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import React from "react";

import GeneralContent from "@/components/GeneralContent";

const Visa300ProspectiveMarriageVisa = () => {
  return (
    <>
      <Breadcrumb
        title={"Visa 300 – Prospective Marriage Visa"}
        items={[
          { label: "Home", href: "/" },
          { label: "Migration" },
          { label: "Family Visas", href: "/migration/family-visas" },
          { label: "Visa 300 – Prospective Marriage Visa", active: true },
        ]}
      />
      <FeatureContent
        subTitle="Visa 300"
        title="Prospective Marriage Visa"
        description={[
          "Are you intending to marry your prospective spouse in Australia? Prospective Marriage Visa a prospective spouse to come to Australia for marriage within the visa’s validity period of 9 months. The Marriage Visa Australia allows people to travel to Australia and marry their partners.",
          "If you want to marry your partner, who’s an Australian permanent resident, Australian citizen, or an eligible citizen of New Zealand, you may apply for Visa 300.",
          "Applicants must be outside Australia while applying for a Prospective Marriage Visa. Applicants can work in Australia with this visa. They can also study at their own expense while living in Australia on Visa 300.",
        ]}
        img1="/marriage-visa.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Benefits of Visa 300",
            texts: [
              {
                type: "ul",
                items: [
                  "You can live in Australia for 9 to 15 months.",
                  "You can travel from and to Australia as many times as you want until your visa is valid.",
                  "You can study at your own expense in Australia.",
                ],
              },
            ],
          },

          {
            title: "Eligibility of Subclass 300",
            texts: [
              {
                type: "ul",
                items: [
                  "Be 18 or above.",
                  "Traveling to Australia with the intention of marrying your partner.",
                  "Be staying outside Australia while lodging your application.",
                  "Have sponsorship by your Australian spouse or de facto partner to visit Australia.",
                  "Meet health and character requirements.",
                  "Have personally met your partner or spouse.",
                  "Have cleared all your debts to the Australian Government.",
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
            title: "Subclass Visa 300 Cost",

            texts: [
              "Prospective Marriage Visa (subclass 300) costs around AUD 7,850. However, if you’ve added your family member to your application, there’ll be separate charges for them.",
            ],
          },
          {
            title: "Visa 300 Stay Period",
            texts: [
              "Prospective Marriage Visa Australia allows you to stay for 9 to 15 months in Australia.",
            ],
          },
          {
            title: "Requirements for Sponsors",
            texts: [
              {
                type: "ul",
                items: [
                  "Permanent residents of Australia, Australian citizens, and eligible citizens of New Zealand are eligible to apply.",
                  "You’re required to provide police checks to the Department of Home Affairs (DOHA).",
                  "You must not be sponsored by anyone to apply for Partner visa or Prospective Marriage Visa within last 5 years.",
                  "You must not have sponsored your spouse or de facto partner to travel to Australia recently unless there’s a compelling or compassionate reason.",
                ],
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default Visa300ProspectiveMarriageVisa;
