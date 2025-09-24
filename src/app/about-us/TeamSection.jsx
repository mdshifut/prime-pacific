import React from "react";

const teamData = [
  {
    name: "Bilal Sarwar",
    image: "teams/testimonial-1.jpg",
    agent: "MARA Agent: 2518813",
    description: "Expert in complex migration matters.",
    delay: "0.1s",
  },
  {
    name: "Dr Asraful Alam",
    image: "teams/testimonial-2.jpg",
    agent: "MARA Agent: 2518813",
    description: "Visa Specialist",
    delay: "0.1s",
  },
  {
    name: "Hanif Diwan",
    image: "teams/testimonial-3.jpg",
    agent: "MARA Agent: 2518813",
    description: "Visa and Student Consultant",
    delay: "0.1s",
  },
  {
    name: "Junaid Diwan",
    image: "teams/testimonial-1.jpg",
    agent: "MARA Agent: 2518813",
    description: "Experienced in student course selection.",
    delay: "0.1s",
  },
];

const TeamItem = ({ name, image, agent, description, delay }) => (
  <div
    className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp"
    data-wow-delay={delay}
  >
    <div className="training-item">
      <div className="training-inner">
        <img src={image} className="img-fluid w-100 rounded" alt="Image" />
        <div className="training-title-name">
          <span className="h4 text-white mb-0">{name}</span>
        </div>
      </div>
      <div className="training-content bg-secondary rounded-bottom p-4">
        <h3 className="text-white">{name}</h3>
        <h6 className="text-white">{agent}</h6>
        <p className="text-white-50">{description}</p>
      </div>
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <div className="container-fluid training overflow-hidden bg-light py-5">
      <div className="container py-5">
        <div
          className="section-title text-center mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="sub-style">
            <h5 className="sub-title text-primary px-3">
              Experienced Migration Professionals
            </h5>
          </div>
          <h1 className="display-5 mb-4">
            Meet Our Dedicated Team Guiding Your Visa Journey
          </h1>
          <p className="mb-0">
            Our team of Australian visa experts provides personalized guidance
            at every step, ensuring your migration journey is smooth, clear, and
            successful
          </p>
        </div>
        <div className="row g-4">
          {teamData.map((member, idx) => (
            <TeamItem key={idx} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
