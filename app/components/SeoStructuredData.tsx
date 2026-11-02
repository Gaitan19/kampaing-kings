import React from "react";

export const SeoStructuredData: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        name: "How to Execute Vehicle Extended Warranty Outbound Telemarketing Calls",
        description:
          "Professional guide for call center agents to introduce vehicle service contracts, verify vehicle condition, overcome objections, and complete a warm transfer to a licensed Service Advisor.",
        step: [
          {
            "@type": "HowToStep",
            name: "Initial Greeting & Finance Reference",
            text: "Greet customer by name, state your organization (Vehicle Services Group), and reference the vehicle financing date and monthly payment amount.",
          },
          {
            "@type": "HowToStep",
            name: "Warranty Notice & Micro-Commitment",
            text: "Inform customer that the extended warranty has not yet been activated, and ask whether the vehicle is in good running condition.",
          },
          {
            "@type": "HowToStep",
            name: "Warm Transfer Permission",
            text: "Request customer approval to connect with an authorized Service Advisor to explain qualification details and coverage.",
          },
          {
            "@type": "HowToStep",
            name: "Live Advisor Introduction",
            text: "Introduce the customer to the Service Advisor on a warm conference bridge.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do you handle 'I'm not interested / I don't have time' on vehicle warranty calls?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Acknowledge the customer's time immediately and ask: 'Really quick, just so I understand—why wouldn't you be interested?' Then explain that the quote with the Service Advisor is 100% complimentary to help them make an informed choice before an unexpected mechanical breakdown occurs.",
            },
          },
          {
            "@type": "Question",
            name: "What is the response when a customer says 'I don't have any service with you'?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "State: 'Exactly, and that's why we're reaching out today—this is your opportunity to activate full protection with zero money down. If you give me one second, I'll introduce you to the coverage expert who can go over the details.'",
            },
          },
          {
            "@type": "Question",
            name: "Where did Vehicle Services Group get the customer's contact information?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Explain that records are sourced from nationwide dealership and vehicle registration databases indicating the vehicle was financed and qualifies for extended warranty coverage.",
            },
          },
          {
            "@type": "Question",
            name: "What should an agent say if the customer asks 'What kind of vehicle is this for'?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Explain: 'I only see the finance info here—no specific make or model, the total payment I show for all your vehicles is (payment amount). That's why I need to get you over to the Service Advisor who has the full picture. Let me just verify, is the vehicle in good running condition?'",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
