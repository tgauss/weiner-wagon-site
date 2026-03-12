import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { placeData } from "../data/place";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Where are you located?",
      answer: `We are located at ${placeData.address}, right in the heart of downtown in the ${placeData.neighborhood} neighborhood, inside ${placeData.locatedIn}.`
    },
    {
      question: "What are your hours?",
      answer: `We are open Monday through Friday from 10:30 AM to 2:00 PM. We are closed on Saturdays and Sundays.`
    },
    {
      question: "Do you offer takeout?",
      answer: `Yes! We are built for takeout. Swing by, grab your go-to order, and be on your way.`
    },
    {
      question: "Do you cater events?",
      answer: "Absolutely. We cater office lunches, private parties, community events, weddings, and more. Visit our Catering & Events page to submit an inquiry."
    },
    {
      question: "Do you have vegetarian options?",
      answer: "Yes, we offer a Vegetarian Delight dog and other options. Just ask when you visit!"
    },
    {
      question: "Is there parking nearby?",
      answer: `Yes! ${placeData.additionalInfo.parking} is available throughout downtown Vancouver near the wagon.`
    },
    {
      question: "What payment methods do you accept?",
      answer: `We accept ${placeData.additionalInfo.payments.join(" and ").toLowerCase()}. Some reviewers recommend bringing cash too.`
    },
    {
      question: "Is the wagon wheelchair accessible?",
      answer: `Yes! We have ${placeData.additionalInfo.accessibility.join(" and ").toLowerCase()}.`
    },
    {
      question: "Can I follow you online?",
      answer: "Yes! Follow us on Instagram @weinerwagon_downtown to see our latest updates, specials, and photos of Wacky McWiener."
    },
    ...placeData.questionsAndAnswers.map((qa) => ({
      question: qa.question,
      answer: `${qa.answer} — ${qa.answeredBy}`,
    })),
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-wagon-red text-white py-24 lg:py-32 border-b-8 border-wagon-mustard overflow-hidden">
        <div className="absolute inset-0 bg-stripes opacity-10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-6 drop-shadow-md">
            Frequently Asked <span className="text-wagon-mustard block mt-2">Questions</span>
          </h1>
        </div>
      </section>

      <section className="py-24 bg-wagon-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border-2 border-wagon-bg-alt overflow-hidden transition-colors hover:border-wagon-green"
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-display text-2xl text-wagon-green">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-wagon-red shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-wagon-red shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6 text-wagon-text/80 font-medium text-lg border-t-2 border-wagon-bg-alt pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
