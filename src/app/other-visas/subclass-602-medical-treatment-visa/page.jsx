import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import GeneralContent from "@/components/GeneralContent";

export const metadata = {
  title: "Medical Treatment Visa (Subclass 602) | Prime Pacific Consultancy",
  description:
    "Expert advice on the Medical Treatment Visa (Subclass 602) for Australia. Learn about eligibility, process, and temporary residency support for medical treatment from Prime Pacific Consultancy.",
};

const SubclassMedicalTreatmentVisa = () => {
  return (
    <>
      <Breadcrumb
        title={"Subclass 602 – Medical Treatment Visa"}
        items={[
          { label: "Home", href: "/" },
          { label: "Other Visa's" },

          {
            label: "Subclass 602 – Medical Treatment Visa",
            active: true,
          },
        ]}
      />
      <FeatureContent
        subTitle="Subclass 602"
        title="Medical Treatment Visa"
        description={[
          "Subclass 602 medical treatment visa is a type of temporary visa that allow people to enter, travel or stay in Australia for medical treatment. The applicant can apply for this visa both from inside or outside of Australia. Visa is usually granted for up to 3 months if applied from outside Australia. And visa is granted for up to 12 months if applied from within Australia.",
        ]}
        img1="/medical.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Subclass 602 Processing Time",
            texts: [
              "Processing Time for Medical Treatment Visa – Subclass 602: 23 Days – 50 Days",
            ],
          },

          {
            title: "Eligibility For Medical Treatment Visa Australia",
            texts: [
              "Be in one of the following situations:",
              {
                type: "ul",
                items: [
                  "Need to have medical treatment or consultations in Australia",
                  "Need to donate an organ to someone or receive an organ from someone in Australia",
                  "Need to support someone who needs medical treatment from Australia",
                  "Intend to come to Australia under the arrangements between the Western Province of Papua New Guinea and the Queensland Department of Health",
                  "Be in Australia with an age of 50 years or above and have already been refused an Australian permanent visa on health grounds only and are medically unfit to leave Australia",
                  "Have the financial capacity to support medical treatment in Australia",
                  "Have the genuine intention of living in Australia temporarily",
                  "Meet health and character requirements",
                ],
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default SubclassMedicalTreatmentVisa;
