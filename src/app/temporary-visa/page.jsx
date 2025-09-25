import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import GeneralContent from "@/components/GeneralContent";
export const metadata = {
  title: "Temporary Residency Visa | Prime Pacific Consultancy",
  description:
    "Comprehensive guidance on Temporary Residency Visas for Australia. Learn about work, study, and training opportunities with expert support from Prime Pacific Consultancy.",
};

const TemporaryResidencyVisa = () => {
  return (
    <>
      <Breadcrumb
        title={"Temporary Residency Visa"}
        items={[
          { label: "Home", href: "/" },
          { label: "Temporary Residency Visa", active: true },
        ]}
      />
      <FeatureContent
        subTitle="Welcome to Prime Pacific Consultancy"
        title="Temporary Resident Visa in Australia"
        description={[
          "If you are anyhow wishing to work somewhere like Australia for a certain period of time, the temporary resident visa in Australia can make your dream come true. With the provision of Australian temporary resident work visa, the applicant can work, study and stay in Australia for a specified time-frame he/she has been assigned with. The different types of temporary work visas let the applicant to undergo a formal training session in relation to their area of expertise and thereby enhance their working traits to a really great extent. After the training session period is over, the applicant will get the wonderful opportunity to stay in Australia and work over there for a particular period of time that the concerned visa grants them to do.",
          "The primary motive behind the framing of these different types of temporary work visas implemented by the Australian Department of Home Affairs is primarily to eradicate shortage of labour from the country. Employers who have got the legal assent to run their business from Australia do have the right to sponsor the candidate to apply for this particular visa. For this they need to lodge a nomination application for the candidate who is applying for the same. There are two categories of temporary visa based upon their individual needs. They can be considered as follows:",
          "1. <a href='/temporary-visa/temporary-skill-shortage-482-visa'>Temporary Skill shortage Visa (subclass 482)</a> <br/><br/> 2. <a href='/temporary-visa/subclass-485-temporary-graduate-visa-australia'>Temporary Graduate visa (subclass 485)</a>",
        ]}
        img1="/temp-visa.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "How Can Prime Pacific Consultancy Help You?",
            texts: [
              "If you are willing to apply for temporary resident visa in Australia, then Prime Pacific Consultancy can exactly help you in this regard. Our team of immensely knowledgeable experts will guide you in every possible manner and will make you submit the most perfect kind of application to the concerned immigration department.",
              "Our experts will first assess the nature of your personal situations and will then recommend a visa, which will be the most suitable for you. They will assist you in executing every of the official formalities in a successful manner that will lead to a successful and hassle free visa procurement session.",
            ],
          },
        ]}
      />
    </>
  );
};

export default TemporaryResidencyVisa;
