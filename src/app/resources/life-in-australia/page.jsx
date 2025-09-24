import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import React from "react";

import GeneralContent from "@/components/GeneralContent";

const LifeInAustralia = () => {
  return (
    <>
      <Breadcrumb
        title={"Life In Australia"}
        items={[
          { label: "Home", href: "/" },
          { label: "Resources" },
          { label: "Life In Australia", active: true },
        ]}
      />
      <FeatureContent
        subTitle="Australia"
        title="Life in Australia"
        description={[
          "Australia is a vast and diverse country known for its vibrant cities, rich cultural heritage, and breathtaking natural landscapes.",
          "Australia is known for its high quality of life, stunning natural landscapes, multicultural society, and strong economy. Whether you’re moving for work, study, or a fresh start, Australia offers a vibrant and welcoming environment with numerous opportunities.",
        ]}
        img1="/life.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Living Standards in Australia",
            texts: [
              "<strong>Quality of Life</strong>",
              {
                type: "ul",
                items: [
                  "Australia consistently ranks among the best countries in the world for quality of life.",
                  "The country boasts excellent healthcare, world-class education, and a strong economy.",
                  "Work-life balance is highly valued, with ample opportunities for outdoor activities, sports, and leisure.",
                  "Australians enjoy a high standard of living with access to modern amenities and infrastructure.",
                ],
              },
              "<strong>Healthcare System</strong>",
              {
                type: "ul",
                items: [
                  "Australia offers one of the best healthcare systems in the world..",
                  "The Medicare system provides affordable and accessible healthcare services to residents.",
                  "Expats and temporary residents may also access private healthcare, ensuring comprehensive medical support.",
                  "A strong network of hospitals and healthcare professionals ensures high-quality medical care nationwide.",
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
            title: "Work-Life Balance",

            texts: [
              {
                type: "ul",
                items: [
                  "Australians value a good work-life balance, promoting flexible work arrangements and generous leave policies.",
                  "Many businesses encourage remote work and shorter workweeks to enhance employee well-being.",
                  "The country has ample vacation and holiday allowances, supporting a relaxed lifestyle.",
                  "Public parks, beaches, and recreational facilities contribute to a healthy and active way of life.",
                ],
              },
            ],
          },
          {
            title: "Safety and Security",
            texts: [
              {
                type: "ul",
                items: [
                  "Australia is a safe and politically stable country with a low crime rate.",
                  "Its friendly communities and well-developed infrastructure make it a secure place to live and raise a family.",
                  "Strict laws and efficient law enforcement ensure public safety in urban and rural areas.",
                  "Emergency services, including police, fire, and medical assistance, are highly responsive and reliable.",
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
            title: "Culture and Diversity",
            texts: [
              {
                type: "ul",
                items: [
                  "Australia is one of the most multicultural countries in the world.",
                  "People from all over the globe contribute to a rich cultural heritage.",
                  "Major cities like Sydney, Melbourne, and Brisbane host diverse cuisines, festivals, and traditions.",
                  "A welcoming society makes it easy for newcomers to integrate and feel at homes.",
                ],
              },
            ],
          },
          {
            title: "Education and Career Opportunities",
            texts: [
              {
                type: "ul",
                items: [
                  "Australia is home to some of the world’s finest universities, including the University of Melbourne, Australian National University, and the University of Sydney.",
                  "The education system is well-regarded internationally, attracting students from around the world.",
                  "Strong career opportunities exist across healthcare, technology, engineering, agriculture, and renewable energy sectors.",
                  "A stable job market with competitive salaries makes Australia an ideal place to build a career.",
                ],
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default LifeInAustralia;
