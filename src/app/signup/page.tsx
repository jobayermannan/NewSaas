"use client";
import React, { useContext, useState, useRef } from "react";
import { AuthContext } from "@/context/AuthContext";
import google from "@/assets/icons8-google-48.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";
import springImage from "@/assets/spring.png";

import Link from "next/link";
import LogoButton from "@/components/LogoButton";

const SignUpForm = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  const { login } = authContext;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: formRef,
    offset: ["start end", "end start"],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUser = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") as string)
      : null;
    console.log("SignUp form:", { firstName, lastName, email, password }); // Debug log
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      login(storedUser);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <section
      ref={formRef}
      className="min-h-screen py-24 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#3e51ff,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-2/3 lg:w-1/2 border-2 border-black p-6 bg-white rounded-lg">
         <LogoButton/>
          <div className="w-full h-auto py-10">
            <h1 className="w-full h-auto gap-1.5 opacity-100 text-left text-2xl md:text-3xl font-medium leading-tight mt-4">
              Join Us Today!
            </h1>
            <p className="w-full h-auto text-[#707070] gap-1.5 opacity-100 text-left text-md md:text-lg leading-tight mr-[132px]">
              Create an account to start tracking your progress and achieving your goals.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3.5 w-full h-auto"
          >
            <div className="flex gap-3.5">
              <div className="relative w-full">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  className="pl-[13px] pt-4 border rounded w-full h-[52px] text-black focus:placeholder-transparent placeholder-black placeholder:text-sm placeholder-bottom"
                />
                <label className="absolute left-3 top-1/4 transform -translate-y-1/2 text-gray-500 text-xs transition-all duration-200 ease-in-out pointer-events-none custom-label">
                  First Name
                </label>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                  className="pl-[13px] pt-4 border rounded w-full h-[52px] text-black focus:placeholder-transparent placeholder-black placeholder:text-sm placeholder-bottom"
                />
                <label className="absolute left-3 top-1/4 transform -translate-y-1/2 text-gray-500 text-xs transition-all duration-200 ease-in-out pointer-events-none custom-label">
                  Last Name
                </label>
              </div>
            </div>
            <div className="relative w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="pl-[13px] pt-4 border rounded w-full h-[52px] text-black focus:placeholder-transparent placeholder-black placeholder:text-sm placeholder-bottom"
              />
              <label className="absolute left-3 top-1/4 transform -translate-y-1/2 text-gray-500 text-xs transition-all duration-200 ease-in-out pointer-events-none custom-label">
                Email Address
              </label>
            </div>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="pl-[13px] pt-4 border rounded w-full h-[52px] text-black focus:placeholder-transparent placeholder-black placeholder:text-sm placeholder-bottom"
              />
              <label className="absolute left-3 top-1/4 transform -translate-y-1/2 text-gray-500 text-xs transition-all duration-200 ease-in-out">
                Password
              </label>
              <div
                className="flex justify-end absolute right-3 top-1/3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEye className="text-[#707070] text-lg" />
                ) : (
                  <FaEyeSlash className="text-[#707070] text-lg" />
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="form-checkbox"
              />
              <label className="text-sm font-medium">
                I agree to the{" "}
                <a href="#" className="text-black underline leading-tight">
                  Terms & Policy
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded"
            >
              Sign Up
            </button>
          </form>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-black font-medium text-sm">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <div className=" gap-4">
            <button className="w-full md:w-full h-[52px] bg-white border border-gray-300 text-black py-2 rounded mb-2 font-medium text-sm flex items-center justify-center gap-2">
              <img src={google.src} alt="Google" width={20} height={20} />
            </button>
          </div>
          <div className="flex justify-center items-center text-sm font-medium m-2">
            <p>
              Already have an account? <Link href="/signin" className="text-[#0F3DDE]">Sign In</Link>
            </p>
          </div>
        </div>
        <div className="hidden md:block mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
          <motion.img
            src={springImage.src}
            alt="Spring image"
            className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            animate={{
              translateY: [-30, 30],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;