import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import data from "./data";
import ListTable from "@/components/ListTable";

export const metadata = {
  title: "Core Skills Occupation List (CSOL) | Prime Pacific Consultancy",
  description:
    "Explore the Core Skills Occupation List (CSOL) for Australia. Find critical occupations for skilled migration and the Skills In Demand (SID) visa, with expert guidance from Prime Pacific Consultancy.",
};

const CoreSkillsOccupationList = () => {
  return (
    <>
      <Breadcrumb
        title={"Core Skills Occupation List (CSOL)"}
        items={[
          { label: "Home", href: "/" },
          { label: "Resources" },
          {
            label: "Core Skills Occupation List (CSOL)",
            active: true,
          },
        ]}
      />
      <FeatureContent
        subTitle="What Is The Core Skills"
        title="Occupation List (CSOL)?"
        description={[
          "The Core Skills Occupation List (CSOL) is Australia’s streamlined framework for skilled migration, identifying critical occupations for the Skills In Demand (SID) visa.",
          "The Skills In Demand (SID) visa replaced the Temporary Skill Shortage visa.",
          "Both visas have the same visa subclass (482) but have different requirements, streams and eligibility criteria.",
        ]}
        img1="/map.jpg"
      />

      <ListTable title="ANZSCO Occupations List" data={data} />
    </>
  );
};

export default CoreSkillsOccupationList;
