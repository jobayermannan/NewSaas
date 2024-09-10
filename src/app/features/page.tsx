"use client";
import { Header } from "@/sections/Header";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import featureImage1 from "@/assets/feature1.png";
import featureImage2 from "@/assets/feature2.png";
import featureImage3 from "@/assets/feature3.png";

export default function FeaturesPage() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <>
      <Header />
      <section
        ref={sectionRef}
        className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
      >
        <div className="container">
          <div className="section-heading relative">
            <h1 className="text-4xl font-bold text-center">Explore Features</h1>
            <p className="mt-4 text-center">
              Ziro offers real-time collaboration, advanced task tracking, and customizable workflows to fit your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <motion.div
              className="feature-card p-6 bg-white rounded-lg shadow-md"
              style={{ translateY }}
            >
              <Image src={featureImage1} alt="Real-Time Collaboration" width={100} height={100} />
              <h2 className="text-2xl font-bold mt-4">Real-Time Collaboration</h2>
              <p className="mt-2">Work with your team effortlessly.</p>
            </motion.div>
            <motion.div
              className="feature-card p-6 bg-white rounded-lg shadow-md"
              style={{ translateY }}
            >
              <Image src={featureImage2} alt="Task Tracking" width={100} height={100} />
              <h2 className="text-2xl font-bold mt-4">Task Tracking</h2>
              <p className="mt-2">Never miss a deadline with our advanced tracking tools.</p>
            </motion.div>
            <motion.div
              className="feature-card p-6 bg-white rounded-lg shadow-md"
              style={{ translateY }}
            >
              <Image src={featureImage3} alt="Customizable Workflows" width={100} height={100} />
              <h2 className="text-2xl font-bold mt-4">Customizable Workflows</h2>
              <p className="mt-2">Tailor the app to suit your specific project needs.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}