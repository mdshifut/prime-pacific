import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import GeneralContent from "@/components/GeneralContent";

export const metadata = {
  title: "Australian Refugee Visa | Prime Consultancy Consultancy",
  description:
    "Support and information for Australian Refugee Visa (Subclass 200) applications.",
};

const AustralianRefugeeVisa = () => {
  return (
    <>
      <Breadcrumb
        title={"Australian Refugee Visa"}
        items={[
          { label: "Home", href: "/" },
          { label: "Migration" },
          {
            label: "Australian Refugee Visa",
            active: true,
          },
        ]}
      />
      <FeatureContent
        subTitle="Your Path to Safety"
        title="Australian Refugee Visa Services"
        description={[
          "Fearing persecution is understandable. We help refugees find safety in compassionate, stable, and opportunity-rich Australia.   Our professional team will guide you through the Australian Refugee Visa process (Subclass 200). It will provide you the best opportunity of a new life without war, violence, or persecution.",
        ]}
        img1="/refugee.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Why Persecuted People Should Flee to Australia?",
            texts: [
              "Not just a country, Australia is shelter.   With its strong human rights commitment, world-class healthcare, and global society, Australia guarantees more than protection.   Genuine refugees can work, study, and become Australian citizens under permanent protection.   Australia’s refugee program protects you and your family permanently, unlike asylum programs.",
              {
                type: "ul",
                items: [
                  "Opting for Australia grants refugees permanent status, avoiding the fear of deportation.",
                  "Australian children receive Medicare and free education.",
                  "Employment—Australia’s strong economy offers career progression and financial flexibility.",
                  "Sponsor family members to join you after settling.  Australia welcomes people from throughout the world and provides community and assistance.",
                  "We handle the rigorous legal process to provide you this life-changing possibility.",
                ],
              },
            ],
          },

          {
            title: "We Aid Get an Australian Refugee Visa",
            texts: [
              "After trauma and displacement, refugee visa management is challenging.   Thus, we intervene.   Our qualified migration agents and lawyers present your Australia Refugee Visa application strongly and correctly to maximise approval. With our support, you can apply for refugee visa Australia more conveniently.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "We Provide Complete Services For Refugee Visa",
            texts: [
              {
                type: "ul",
                items: [
                  "Eligibility Assessment—we’ll establish if you qualify for Australia’s humanitarian program before advancing.   Let us identify the best refugee visa, in-country special humanitarian visa, or alternative immigration track for you.",
                  "Documentation and Evidence—Proving persecution is crucial for a successful claim.   We’ll help you get police reports, medical records, witness evidence, and UNHCR recommendations to prove your case.",
                  "Application Lodgement & Follow-Up – We manage documentation and transmit it accurately to avoid delays or denials.   We communicate with the Department of Home Affairs about your application.",
                  "Interview preparation—we’ll assist you present your case to immigration officials.",
                  "Can show English proficiency (IELTS, PTE, etc.)",
                  "Appeal & Rejection Assistance – We help you defend your protection with experienced appeals and reapplications.",
                ],
              },
            ],
          },
          {
            title: "Options for Australia Refugee Visa Application",
            texts: [
              "Australia offers many type of humanitarian visas.   Our experts will pick the best:",
              {
                type: "ul",
                items: [
                  "Non-Australian Refugee Visa (Subclass 200) - This visa allows refugee camp residents to stay permanently in Australia.   Your UNHCR referral is needed, and our experts can help you get selected.",
                  "Home-country residents’ Subclass 201 special humanitarian visa - This visa lets those afraid of persecution but not yet escaping head to Australia.   We’ll help you get an Australian sponsor and establish homecoming is perilous.",
                  "Life-Threatening Emergency Rescue Visa (Subclass 203) - If your life is in jeopardy, this expedited visa will get you to Australia in weeks.   We’ll collaborate with UNHCR and Australia to accelerate your application.",
                  "Subclass 204 Woman at Risk Visa for Vulnerable Women and Children - This visa is for single women at risk of abuse, trafficking, or persecution.   Your safety is our priority with sensitive, confidential support.",
                  "Global Special Humanitarian Visa (Subclass 202) for Non-Refugees - This visa may be possible if you face significant human rights abuses but are not a UN refugee.   We can help you find an Australian applicant proposer.",
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
            title: "Who Gets an Australian Refugee Visa?",
            texts: [
              "Australia’s refugee program targets people who fear persecution for their race, religion, nationality, politics, or social group.",
              {
                type: "ul",
                items: [
                  "Cannot return home owing to government incapacity or reluctance to protect them. ",
                  "Limited safe relocation options within their nation.",
                  "Meet health and character requirements (humanitarian exceptions apply).",
                ],
              },
              "You qualify if you were tortured, sexually assaulted, conscripted, or threatened for your identity.   We can explain your case to Australian authorities despite its intricacy.",
            ],
          },
          {
            title: "We Guide you Through the Visa Process",
            texts: [
              {
                type: "ul",
                items: [
                  "A free consultation can help you decide if an Australia Refugee Visa is correct for you.",
                  "Gathering Evidence – We gather papers, affidavits, and expert studies to prove your persecution.",
                  "Department of Home Affairs Visa Application Submission—our experts submit your application.",
                  "Interview Preparation – We teach persuasive argumentation.",
                  "Visa Grant & Travel Arrangements – We’ll arrange travel and connect you with Australian settlement services.",
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
            title: "Why Choose Us for Australian Refugee Visas?",
            texts: [
              {
                type: "ul",
                items: [
                  "Our Australian government-licensed Registered Migration Agents ensure legal compliance and experience.",
                  "High Success Rate—helping hundreds of refugees get safety in Australia.",
                  "Compassionate Support—we honour each client’s trauma.",
                  "No upfront fees- Flexible payment plans reduce financial barriers to safety.",
                ],
              },
            ],
          },
          {
            title: "Australia Awaits Your New Life",
            texts: [
              "Escape from persecution is just the beginning.   An Australian Refugee Visa lets you live fearlessly, reunite with family, and hope for the future. Applications are processed, but lives are changed.   Let us handle the legal details while you heal and start over.",
            ],
          },
        ]}
      />
    </>
  );
};

export default AustralianRefugeeVisa;
