'use client'

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { Header } from "@/sections/Header"




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
]

const ShimmerBorder = () => (
  <div className="absolute inset-0 rounded-lg overflow-hidden">
    <motion.div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(90deg, transparent, #747de1, transparent)',
        backgroundSize: '200% 100%',
        backgroundRepeat: 'no-repeat',
        maskImage: 'linear-gradient(to left, transparent, white, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black, transparent)',
      }}
      animate={{
        x: ['-100%', '100%'],
      }}
      transition={{
        repeat: Infinity,
        duration: 2.5,
        ease: "linear",
      }}
    />
  </div>
)

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8 relative">
    <div className="absolute inset-0 rounded-lg border border-gray-200" />
    <ShimmerBorder />
    <div className="relative z-10">{children}</div>
  </div>
)

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
     <Header/>
      <section className="min-h-screen py-24 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#1438af] text-transparent bg-clip-text">
              Help & FAQs
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Find answers to common questions below.
            </p>
          </div>
          <Card>
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0">
                <button
                  className="w-full text-left flex justify-between items-center text-lg font-medium text-black py-2 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  {openIndex === index ? (
                    <BiChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <BiChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-700 mt-2">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </Card>
          <Card>
            <h2 className="text-lg font-medium text-black py-2">How to contact us</h2>
            <p className="text-gray-700 mt-2">
              You can contact us via email at support@example.com or call us at (123) 456-7890.
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-medium text-black py-2">Privacy and relevant info</h2>
            <p className="text-gray-700 mt-2">
              Your privacy is important to us. Please read our privacy policy for more information.
            </p>
          </Card>
        </div>
      </section>
    </>
  )
}