import HeroSlider from "@/app/(home)/HeroSlider";
import FeatureContent from "@/components/FeatureContent";
import ServicesOverview from "./ServicesOverview";
import Services from "./Services";
import SuccessSection from "./SuccessSection";
import TestimonialSection from "./TestimonialSection";

export const metadata = {
  title: "About Us | Prime Pacific Consultancy",
  description:
    "Your Trusted Partner for Australian Visa Solutions. MARA certified consultants offering complete support for migration to Australia.",
  keywords: [
    "Australia visa",
    "migration",
    "consultancy",
    "MARA certified",
    "Prime Pacific Consultancy",
  ],
};

export default function Home() {
  return (
    <>
      <HeroSlider />
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
      <ServicesOverview />
      <Services />
      <SuccessSection />
      <TestimonialSection />
    </>
  );
}
