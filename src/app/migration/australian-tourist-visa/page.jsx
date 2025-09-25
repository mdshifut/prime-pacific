import Breadcrumb from "@/components/Breadcrumb";
import FeatureContent from "@/components/FeatureContent";
import GeneralContent from "@/components/GeneralContent";

export const metadata = {
  title: "Australian Tourist Visa | Prime Pacific Consultancy",
  description:
    "Information and expert guidance for Australian Tourist Visa applications and travel advice.",
};

const AustralianTouristVisa = () => {
  return (
    <>
      <Breadcrumb
        title={"Australian Tourist Visa"}
        items={[
          { label: "Home", href: "/" },
          { label: "Migration" },
          {
            label: "Australian Tourist Visa",
            active: true,
          },
        ]}
      />
      <FeatureContent
        subTitle="Australian Tourist Visa "
        title="Enables You to Fulfil Your Dreams"
        description={[
          "<strong>Apply For Australia Tourist Visa Through Expert Consultants</strong>",
          "Australia Tourist Visa enables you to stay for a short term which is perfect for tourism, sightseeing, or spending time with family. It is granted visa for three, six and even twelve months depending upon your travel plans. ",
          "There are two main types of tourist visa streams:",
          "Tourist Stream (outside Australia): Perfect for those applying from their home country.",
          "Tourist Stream (in Australia): Ideal for visitors who are already in the country and wish to extend their stay.",
        ]}
        img1="/tourist.jpg"
      />

      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Get Professional Support for Your Australian Tourist Visa",
            texts: [
              "For first time Australia tourist visa application can be extremely confusing. You may find yourself asking:",
              {
                type: "ul",
                items: [
                  "What documents do I need?",
                  "How much time will it take?",
                  "Will my visa be approved?",
                ],
              },
            ],
          },

          {
            title: "Here’s What We Do For You",
            texts: [
              {
                type: "ul",
                items: [
                  "Explain the process clearly and answer all your questions.",
                  "Provide a customized checklist of the documents you need.",
                  "Help you draft a clear and honest travel itinerary or personal statement.",
                  "Submit your Australia tourist visa application accurately—leaving no room for error.",
                  "Provide  extra support if you’ve had visa refusals before.",
                  "Helping you avoid delays, rejections, and unnecessary stress—so you can focus on planning your adventure.",
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
            title:
              "Eligibility and Reasons to Apply for Australian Tourist Visa",
            texts: [
              "There are multiple reasons to apply for Australian travel visa and reasons include- ",
              {
                type: "ul",
                items: [
                  "Going on holiday",
                  "Visiting friends or family",
                  "Exploring short-term business opportunities",
                  "Taking a non-work short course",
                ],
              },
            ],
          },

          {
            title: "You’re Eligible to Apply if You Can Show",
            texts: [
              {
                type: "ul",
                items: [
                  "A genuine intention to stay temporarily",
                  "Enough money to support yourself during your visit",
                  "Strong reasons to return home (like a job, property, or family)",
                  "A good travel history (where applicable)",
                  "That you meet Australia’s health and character standards",
                ],
              },
              "Through our expertise webolster your case to show immigration authorities that you are a genuine visitor.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Documents Needed For a Australian Tourist Visa",
            texts: [
              "While applying , having the right paperwork is crucial. Here’s what you’ll typically need:",
              {
                type: "ul",
                items: [
                  "A valid passport with bio page ",
                  "Recent passport-sized photo to go with it ",
                  "Completed visa application form",
                  "Bank statements or proof of funds for financial position ",
                  "Travel itinerary which includes bookings, flight tickets etc.",
                  "Invitation letter if you are staying with friends and relatives ",
                  "Letter from your employer or approved leave documents",
                  "Evidence of your ties to your home country",
                  "Proof of health insurance",
                  "Previous travel history (if applicable)",
                ],
              },
              "We ensure that each document meets the official requirements the chances reducing of errors, delays, or rejections.",
              "The visa process doesn’t have to be complex especially with professionals by your side. Here’s how we support your Australia tourist visa application:",
              {
                type: "ul",
                items: [
                  "Initial Discussion </br>We start with a friendly consultation to understand your travel goals and suggest the right visa stream.",
                  "Document Checklist & Support </br>You’ll get a detailed checklist, and we help you gather everything needed—correctly and on time.",
                  "Application Submission </br>We handle the entire online submission process and make sure everything is in order before lodging it.",
                  "Follow-Ups & Communication </br>We monitor your application status and help respond to any additional requests from the immigration department.",
                  "Visa Outcome & Next Steps </br>when your visa is approved, we notify you instantly and help with the next steplike booking your flight or arranging travel insurance.",
                ],
              },
              "We make your travel experience seamless and worthwhile.",
            ],
          },
        ]}
      />
      <GeneralContent
        className="about-faq"
        contentList={[
          {
            title: "Australia Tourist Visa Process Duration",
            texts: [
              "Generally, Australia tourist visa process takes around 2 to 6 weeks. But it can differ based on your country, personal background, and application volume.",
              "We always recommend applying at least 4 to 8 weeks before your travel date. Have an urgent plan? Let us know—we can explore faster processing options for you.",
              "In order to deal with logistics and planning that goes with traveling one needs professional support.",
            ],
          },

          {
            title: "Choose Expert Australia Tourist Visa Consultants",
            texts: [
              "While planning a memorable visit, the last thing you want is visa related hassles. Even the smallest mistake—like a missing document—can delay or even cancel your travel.",
              "We help you avoid that. With years of experience and hundreds of approved visas behind us, we know what works. Whether you’re a solo traveller, a couple planning a honeymoon, or a family reuniting with loved ones, we treat every application with care.",
              {
                type: "ul",
                items: [
                  "Personalized guidance",
                  "Transparent communication",
                  "Faster results",
                  "No room for  guesswork",
                ],
              },
              "Contact us to apply for Australia tourist visa as we provide genuine support to get your visitor visa in the minimum time. We are the only Australia tourist visa consultants who provides best services and support without any hidden charges.",
            ],
          },
        ]}
      />
    </>
  );
};

export default AustralianTouristVisa;
