import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import React from "react";
import Services from "./Services";
import TeamSection from "./TeamSection";
import GeneralContent from "@/components/GeneralContent";
export const metadata = {
  title: "About Us | Prime Pacific Consultancy",
  description:
    "Learn about Prime Pacific Consultancy, our origin story, and why choosing a registered migration agent matters for your Australian visa journey.",
};
const AboutUs = () => {
  return (
    <>
      <Breadcrumb
        title={"About Us"}
        items={[
          { label: "Home", href: "/" },
          { label: "About Us", active: true },
        ]}
      />
      <FeatureContent
        showContactButton
        subTitle="Welcome to Prime Pacific Consultancy"
        title="Your Trusted Partner for Australian Visa Solutions"
        description={[
          "Prime Pacific Consultancy is the best Australia visa consultants. Our MARA certified Immigration consultants offers complete support and services for your easy migration in Australia. At Prime Pacific Consultancy we understand the emotions that come with migrating to a new country because we’ve been through it ourselves. <b>Our founders, migrated to Australia over a decade ago.</b>",
          "During their own migration journeys, they fell in love with Australia but found the process overwhelming and stressful. Outdated information and a convoluted government website only added to their frustration. Despite engaging their own Registered Migration Agents for help, they were underwhelmed with the service they received.",
        ]}
        img1="about-2.png"
        img2="hand-passport.jpg"
      />
      <Services />
      <TeamSection />
      <FeatureContent
        subTitle="Our Origin Story"
        title="The Journey Behind Prime Pacific Consultancy"
        description={[
          "At Prime Pacific Consultancy, we understand the emotions that come with migrating to a new country because we’ve been through it ourselves. Our founders, migrated to Australia, over a decade ago.",
          "During their own migration journeys, they fell in love with Australia but found the process overwhelming and stressful. Outdated information and a convoluted government website only added to their frustration. Despite engaging their own Registered Migration Agents for help, they were underwhelmed with the service they received.",
          "Now as Australian citizens, they pursue long term careers in the Australian immigration industry with a mission to offer a superior service with empathy and genuine care for their clients…",

          {
            type: "blockquote",
            text: "“Our goal is to ensure that every person who engages Migration Unity to assist them receives a service that exceeds their expectations and leaves them in a better position than before.”",
          },
          "Did you know that nearly half (49%) of all Australians were either born overseas or have at least one parent born overseas?",
        ]}
        img1="worker.jpg"
        // img2="hand-passport.jpg"
        rightImage
      />
      <GeneralContent
        className="bg-light"
        contentList={[
          {
            title: "What is a Registered Migration Agent?",
            texts: [
              "A Registered Migration Agent (RMA) is an individual who is registered with the Office of the Migration Agents Registration Authority (MARA) in Australia. They are authorised to legally provide advice and assistance on Australian migration matters to individuals, families, and businesses.",
              "MARN stands for Migration Agents Registration Number, which is a unique number given to each registered migration agent by the MARA. It is used to identify registered migration agents and to ensure that they meet the professional standards and ethical requirements set by the MARA. Clients can verify the registration of an RMA by checking their MARN on the MARA website.",
            ],
          },
          {
            title: "Why Does it Matter That My Migration Agent is Registered?",
            texts: [
              "It is important to work with a registered migration agent because they are authorised by the Australian government to provide immigration assistance and advice. This means they have undergone the necessary training in Australian immigration law and meet the professional standards required by the Office of the Migration Agents Registration Authority (MARA).",
              "By working with an experienced and reputable registered migration agent, you can be assured that they have the knowledge, skills, and experience necessary to help you navigate the complex Australian immigration system.",
              "Furthermore, registered migration agents are bound by a Code of Conduct that requires them to act professionally, honestly, and in the best interests of their clients. This gives you an added layer of protection, as you can be confident that your agent will act ethically and with your best interests in mind.",
              "Overall, working with a registered migration agent can help you achieve your migration goals and provide you with peace of mind during what can be a stressful and complex process.",
            ],
          },
        ]}
      />
    </>
  );
};

export default AboutUs;
