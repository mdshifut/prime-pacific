import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import React from "react";
import data from "./data";
import ListTable from "@/components/ListTable";

const SkilledOccupationList = () => {
  return (
    <>
      <Breadcrumb
        title={"Skilled Occupation List"}
        items={[
          { label: "Home", href: "/" },
          { label: "Resources" },
          {
            label: "Skilled Occupation List",
            active: true,
          },
        ]}
      />
      <FeatureContent
        subTitle="What Is The Skilled"
        title="What Is The Skilled Occupation List?"
        description={[
          "The skilled occupation list is made up of the Medium and Long-term Strategic Skills List (MLTSSL), the Short-term Skilled Occupation List (STSOL) and the Regional Occupation List (ROL).",
          "In addition to the Skilled Occupation list the Department has provided a separate list for Subclass 494 Skilled Employer Sponsored (Regional). This list contains more occupations. It can be found here.",
        ]}
        img1="/list.jpg"
      />

      <ListTable title="ANZSCO Occupations List" data={data} />
    </>
  );
};

export default SkilledOccupationList;
