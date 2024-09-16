import React from "react";
import { Header } from "@/sections/Header";

const faqData = [
  {
    question: "What is this app about?",
    answer: "This app helps you track your progress, motivate your efforts, and celebrate your successes.",
  },
  {
    question: "How do I create an account?",
    answer: "You can create an account by clicking on the Sign Up button and filling in the required details.",
  },
  {
    question: "How do I reset my password?",
    answer: "You can reset your password by clicking on the Forgot Password link on the Sign In page.",
  },
  // Add more FAQs as needed
];

const HelpPage = () => {
  return (
    <>
      <Header showStreamlineText={false} />
      <section className="min-h-screen py-24 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              Help & FAQs
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Find answers to common questions below.
            </p>
          </div>
          <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8" style={{ width: '80%' }}>
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 pb-4 mb-4">
                <h2 className="text-lg font-medium text-black py-2">
                  {faq.question}
                </h2>
                <p className="text-gray-700 mt-2">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8" style={{ width: '80%' }}>
            <h2 className="text-lg font-medium text-black py-2">How to contact us</h2>
            <p className="text-gray-700 mt-2">
              You can contact us via email at support@example.com or call us at (123) 456-7890.
            </p>
          </div>
          <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg" style={{ width: '80%' }}>
            <h2 className="text-lg font-medium text-black py-2">Privacy and relevant info</h2>
            <p className="text-gray-700 mt-2">
              Your privacy is important to us. Please read our privacy policy for more information.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpPage;