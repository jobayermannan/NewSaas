'use client'

import Button from '@/components/Button'
import { Footer } from '@/sections/Footer'
import { Header } from '@/sections/Header'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { BiBarChart } from 'react-icons/bi'
import { CgLock } from 'react-icons/cg'
import { FaUserSecret } from 'react-icons/fa'
import { FiZap } from 'react-icons/fi'

export default function FeaturePage() {
  const features = [
    {
      icon: <CgLock className="h-10 w-20 mx-auto mb-4" />,
      title: 'Time Tracking',
      description: 'Effortlessly track time spent on tasks and projects.',
      color: 'from-purple-400 to-indigo-500',
    },
    {
      icon: <BiBarChart className="h-10  w-20 mx-auto mb-4" />,
      title: 'Analytics Dashboard',
      description: 'Gain insights with powerful analytics and reporting tools.',
      color: 'from-green-400 to-cyan-500 ',
    },
    {
      icon: <FaUserSecret className="h-10 w-20 mx-auto mb-4" />,
      title: 'Team Collaboration',
      description: 'Seamlessly work together with your team in real-time.',
      color: 'from-pink-400 to-rose-500',
    },
    {
      icon: <FiZap className="h-10 w-20 mx-auto mb-4" />,
      title: 'Automation',
      description: 'Automate repetitive tasks and boost your productivity.',
      color: 'from-yellow-400 to-orange-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <>
    <Header showStreamlineText={false}/>
    <div className="min-h-screen bg-[radial-gradient(ellipse_200%_50%_at_bottom,#4e70e8,#EAEEFE_100%)] text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-black to-[#001E80] sm:text-5xl md:text-6xl"
          >
            Boost Your Productivity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 max-w-md mx-auto text-base text-[#010D3E] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Streamline your workflow, collaborate seamlessly, and achieve more with our cutting-edge productivity platform.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} itemVariants={itemVariants} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          
            <Button href='signin' >Get started for free</Button>
          
        </motion.div>
      </main>
    </div>
    <Footer/>
    </>
  )
}

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
}

const defaultCardColor = 'bg-blue-100';

function FeatureCard({ feature, itemVariants }: { feature: Feature; itemVariants: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className={`relative ${defaultCardColor} bg-opacity-50 backdrop-blur-lg p-8 rounded-3xl overflow-hidden shadow-[0_7px_14px_#3b3b41]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 transition-opacity duration-300 ${
          isHovered ? 'opacity-20' : ''
        }`}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
        animate={{
          opacity: isHovered ? [0, 1, 0] : 0,
          left: isHovered ? ['-100%', '100%'] : '-100%',
        }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
      />
      <div className="relative z-10 text-center">
        <div className="mx-auto mb-4  bg-gradient-to-b from-black to-[#001E80]   rounded-xl p-3 inline-block">
          {feature.icon}
        </div>
        <h3 className="mt-4 text-md tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-black to-[#001E80] sm:text-sm md:text-lg">{feature.title}</h3>
        <p className="mt-2 text-base text-[#000000]">{feature.description}</p>
      </div>
    </motion.div>
  );
}
